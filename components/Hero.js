// Header component.
// import Image from "next/image";
// import "animate.css";

export default function Hero() {
    return (
        <section className="overflow-hidden">
            <div className="relative">
                <div className="absolute h-full w-[1279px]">
                    <div className="absolute bg-[#F2B243E5] -ml-[450px] rotate-[55deg] h-[1200px] w-[1679px] opacity-90"></div>
                    <div className="relative">
                        <div className=""></div>
                        <div className="absolute h-[297px] w-[776px] top-[226px] left-[155px] font-bold text-[57px] leading-[65px] tracking-[0.02em] text-left text-[#0C0B08]">
                            <span>
                                EMPOWERING<br></br>
                                <span className="text-white"> BUSINESSES</span>{" "}
                                WITH INNOVATIVE<br></br> TECHNOLOGY SOLUTIONS
                            </span>
                        </div>
                        <div className="absolute w-[749px] h-[128px] top-[545px] left-[155px] text-[24px] text-[#0C0B08]">
                            <span>
                                With expertise and dedication, we streamline
                                operations, boost productivity, and drive
                                growth. Our commitment to exceptional support
                                ensures our clients' success in a dynamic
                                digital world.
                            </span>
                        </div>
                    </div>
                </div>
                <img src="hero img.png" className="w-full"></img>
            </div>
        </section>
    );
}

// export default function Hero() {
//     return (
//         <div className="relative flex w-full font-nunito">
//             <div className="w-1/4 bg-[#fdfff3] h-vh relative flex-col items-center pl-10 pt-20"></div>
//             <div className="bg-[#fdfff3] absolute items-center w-[580px] top-[100px] left-[50px]">
//                 <h1 className="text-[120px] leading-[7rem] text-gray-500">
//                     <span className="text-primary">A</span>Axon Solutions
//                 </h1>
//                 <p className="text-[34px]">Where Vision Meets Technology</p>
//             </div>
//             <div className="w-3/4 h-vh">
//                 <img src="/assets/heroImage.jpg" alt="hero image example" />
//             </div>
//         </div>
//     );
// }
