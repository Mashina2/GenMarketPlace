import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
export default function ProductCarousel() {
  var settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`/img/carousel/pb${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <Image src="/img/carousel/pb1.png" width={758} height={756} alt="" />
        <Image src="/img/carousel/pb2.png" width={758} height={756} alt="" />
      </Slider>
    </>
  );
}
