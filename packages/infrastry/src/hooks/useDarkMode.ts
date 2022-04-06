/* eslint-disable react-hooks/exhaustive-deps */

// From: https://github.com/donavon/use-dark-mode

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEventListener from '@use-it/event-listener'
import createPersistedState from 'use-persisted-state'

interface MediaQueryEventTarget {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void
}

type useMediaQueryListEventListener = (
  eventName: 'change',
  handler: (event: MediaQueryListEvent) => void,
  element: MediaQueryEventTarget | null
) => void

type WorkingMode =
  | 0 // Undefined, no initial & no media query
  | 1 // Options-defined initial
  | 2 // Media query
  | 3 // User persisted state

export type DarkMode = 'light' | 'dark'

export interface DarkModeOptions {
  initial?: DarkMode
  usePrefer: Boolean
  usePersisted: boolean
}

export interface DarkModeResult {
  value: DarkMode
  change: (value: DarkMode) => void
  enable: () => void
  disable: () => void
  toggle: () => void
}

const defaultOptions: DarkModeOptions = {
  usePrefer: true,
  usePersisted: true,
}

const preferDarkQuery = '(prefers-color-scheme: dark)'

export const useDarkMode = (
  options?: Partial<DarkModeOptions>
): DarkModeResult => {
  // Define undefined initial
  let initial: DarkMode = 'light'
  let workingMode: WorkingMode = 0

  // Stage 1: options
  const optionStage = useMemo(
    (): DarkModeOptions => Object.assign({}, defaultOptions, options),
    [options?.initial, options?.usePrefer, options?.usePersisted]
  )
  if (optionStage.initial) {
    initial = optionStage.initial
    workingMode = 1
  }
  const parsedOptions = optionStage

  // Stage 2: Media query
  const mediaQueryStage: {
    initial: DarkMode | undefined
    mediaQueryEventTarget: MediaQueryEventTarget | null
  } = useMemo(() => {
    if (!parsedOptions.usePrefer || typeof window === 'undefined')
      return {
        initial: undefined,
        mediaQueryEventTarget: null,
      }

    // Perform media query
    const mediaQuery: Partial<MediaQueryList> = window.matchMedia
      ? window.matchMedia(preferDarkQuery)
      : {}

    const mediaQueryEventTarget = {
      addEventListener: (
        _type: string,
        listener: EventListenerOrEventListenerObject
      ) => mediaQuery.addListener && mediaQuery.addListener(listener as any),
      removeEventListener: (
        _type: string,
        listener: EventListenerOrEventListenerObject
      ) =>
        mediaQuery.removeListener && mediaQuery.removeListener(listener as any),
    }

    const isQuerySupported = mediaQuery.media === preferDarkQuery

    return {
      initial: (isQuerySupported && mediaQuery.matches ? 'dark' : undefined) as
        | DarkMode
        | undefined,
      mediaQueryEventTarget,
    }
  }, [options?.usePrefer])
  if (mediaQueryStage.initial) {
    initial = mediaQueryStage.initial
    workingMode = 2
  }

  // Stage 3: Persisted stage
  const persistedStage = useMemo(() => {
    if (!parsedOptions.usePersisted) return {}

    return {
      createPersistedState: () =>
        createPersistedState('com.ilharper.infrastry.prefersDark'),
    }
  }, [options?.usePersisted])
  if (persistedStage.createPersistedState) {
    // There's no initial for persistedStage because
    // 'use-persisted-state' will ignore initial state
    // when there's state in LocalStorage.
    // Just set workingMode.
    workingMode = 3
  }

  // Use state
  const useDarkModeState: (
    initialState: DarkMode
  ) => [DarkMode, React.Dispatch<React.SetStateAction<DarkMode>>] = (
    persistedStage.createPersistedState
      ? persistedStage.createPersistedState()
      : useState
  ) as any
  const [state, setState] = useDarkModeState(initial)

  // Mode change handler
  useEffect(() => {
    window?.document
      .querySelector('html')
      ?.classList.toggle('inf-dark', state === 'dark')
  }, [state])

  // Event listener for stage 2: Media query
  ;(useEventListener as useMediaQueryListEventListener)(
    'change',
    ({ matches }) => workingMode === 2 && setState(matches ? 'dark' : 'light'),
    mediaQueryStage.mediaQueryEventTarget as any
  )

  return {
    value: state,
    change: useCallback((value) => setState(value), [setState]),
    enable: useCallback(() => setState('dark'), [setState]),
    disable: useCallback(() => setState('light'), [setState]),
    toggle: useCallback(
      () => setState((current) => (current === 'light' ? 'dark' : 'light')),
      [setState]
    ),
  }
}
