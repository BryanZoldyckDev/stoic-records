import React, { 
    PropsWithChildren,
    useCallback,
    useEffect,
    useState 
} from 'react'

import useEmblaCarousel, { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react'

import Autoplay from 'embla-carousel-autoplay'

interface CarouselElement {
    slides: number[]
    options?: EmblaOptionsType
}

interface UsePrevNextButtonsElement {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export {
    /*React exports*/
    React,
    useCallback,
    useEffect,
    useState,

    /*External packages exports*/
    Autoplay, 
    useEmblaCarousel, 
}

export type {
    /*React exports*/
    PropsWithChildren,
    /*External packages*/
    EmblaCarouselType,
    EmblaOptionsType,
    /*Interfaces*/
    CarouselElement,
    UsePrevNextButtonsElement
}

