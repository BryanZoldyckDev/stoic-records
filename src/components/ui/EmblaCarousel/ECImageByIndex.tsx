import image1 from '../../../assets/imgs/slider1.png'
import image2 from '../../../assets/imgs/slider2.png'
import image3 from '../../../assets/imgs/slider3.png'
import image4 from '../../../assets/imgs/slider4.png'
import image5 from '../../../assets/imgs/slider5.png'


export const images: string[] = [image1, image2, image3, image4, image5]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex