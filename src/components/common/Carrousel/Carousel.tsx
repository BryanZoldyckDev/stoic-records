import { EmblaOptionsType, EmblaCarousel } from '../../ui/EmblaCarousel';

const options: EmblaOptionsType = { align: 'start', dragFree: true, loop: true }
const slideCount = 5
const slides = Array.from(Array(slideCount).keys())

export const Carousel = () => {
    return (
        <EmblaCarousel slides={slides} options={options} />
    );
}