import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function BackgroundImage() {
	return (
		<div className="absolute top-0 w-full h-screen -z-10">
			<LazyLoadImage
				src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMF8zZF9yZW5kZXJfY2FydG9vbl9zdHlsZV9vZl9hbl9haXJwb3J0X2NhcnRvb19kYTFiMThiMi05NGU5LTRkMTAtYTFlZS1mY2FmNTJlN2JhOGVfMS5qcGc.jpg"
				alt="wallpaper"
				className="h-full w-full object-cover object-center"
				effect="blur"
				wrapperClassName="wrapper w-full h-full p-0 m-0 object-cover object-center bg-black bg-opacity-70"
			/>
		</div>
	);
}
