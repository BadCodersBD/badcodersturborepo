import React, { useState, useEffect } from "react";
import { Image, Divider } from "antd";
import { GenericSpinner } from "@/components/ui/element/GenericSpinner/GenericSpinner";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import { fetchCar } from "../../../../utils/fetchCarImage";
import type { carimagestype } from "@/types/type";

const ImageView = () => {
	const [CarImages, setCarImages] = useState<carimagestype[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	console.log(CarImages);

	useEffect(() => {
		const fetchCarData = async () => {
			try {
				setTimeout(async () => {
					const carImage = await fetchCar();
					setCarImages(carImage);
					setLoading(false);
				}, 2000);
			} catch (e) {
				console.log("Error", e);
				setLoading(false);
			}
		};

		fetchCarData();
	}, []);

	if (loading) {
		return (
			<div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
				<GenericSpinner diameter={50} />
			</div>
		);
	}
	return (
		<div className=" flex flex-col justify-center items-center min-h-screen bg-white text-black ">
			<h1 className=" my-3 text-3xl font-bold text-green-800 ">
				Car Images Card{" "}
			</h1>
			<div className=" grid grid-cols-3 gap-2  ">
				{CarImages.map((data, index) => (
					<div
						key={index}
						className="border border-gray-500 rounded-lg shadow-md bg-gray-100"
					>
						<Image
							src={urlForThumbnail(data.carimages)}
							width={250}
							height={250}
							alt="car images"
							// sizes="100vw"
							style={{
								objectFit: "contain",
								cursor: "progress",
							}}
						/>
						<div className="flex justify-around py-2 text-xl text-blue-800 font-bold">
							<h1>{data.cartitle}</h1>
							<Divider type="vertical" rootClassName=" bg-red-900 my-2 " />
							<h1>${data.carprice}</h1>
						</div>
						<div className=" flex justify-around py-2 text-xl ">
							<h1>{data.carspeed}</h1>
							<h1>{data.carcolor}</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageView;
