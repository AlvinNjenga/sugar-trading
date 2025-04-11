import React, { useState } from 'react';
import Container from '../../components/Container';
import { ArrowUpRight } from 'lucide-react';
import RailServiceImg from '../../assets/rail_services.jpg';

const services_list = ["Rail transport", "Ocean transport", "Airplane transport", "Road transport"];

const services_img = {
    "Rail transport": "rail_services.jpg",
    "Ocean transport": "ship_services.jpg",
    "Airplane transport": "air_services.jpg",
    "Road transport": "road_services.jpg",
};

// const servicesData = {
//     "rail": {
//         title: "Rail transport",
//         imageUrl: "rail_services.jpg",
//     },
//     "ocean": {
//         title: "Ocean transport",
//         imageUrl: "rail_services.jpg",
//     },
//     "airplane": {
//         title: "Airplane transport",
//         imageUrl: "airplane_services.jpg",
//     },
//     "road": {
//         title: "Road transport",
//         imageUrl: "road_services.jpg",
//     }
// }

const ServiceItem = ({ title, activeItem, onClick }) => {
    const isActive = activeItem == title;

    return (
        <li onClick={onClick} className={`py-7 flex justify-between items-center border-t-[1px] cursor-pointer transition-all ease-in-out border-[#666666] ${isActive ? 'bg-[#121315] px-4' : ''}`}>
            <p className={`${isActive ? 'text-[#f55b1f]' : 'text-[#FFFFFF80]'} font-bold font-outfit text-2xl`}>{title}</p>
            <ArrowUpRight size={36} color={isActive ? '#f55b1f' : 'white'} />
        </li>
    );
};

const Services = () => {
    const [activeItem, setActiveItem] = useState(services_list[1]);

    const handleItemClick = (item) => {
        console.log("Was clicked: ", item);
        setActiveItem(item);
    };

    const serviceImg = "road_services.jpg";
    console.log(services_img[activeItem]);


    return (
        <section id="services" className='flex'>
            <div id="services-content" className='flex flex-col w-[55%] bg-[#1E2023]'>
                <Container>
                    <div id="title-wrapper">
                        <span id="sub-title" className='flex items-center gap-2 text-[#f55b1f] font-outfit font-semibold'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none"><path d="M0 0H9V9H0V0Z" fill="#f55b1f"></path><path d="M9 4H25V5H9V4Z" fill="#f55b1f"></path></svg>
                            SERVICES WE OFFER
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none"><path d="M25 0H16V9H25V0Z" fill="#f55b1f"></path><path d="M16 4H0V5H16V4Z" fill="#f55b1f"></path></svg>
                        </span>
                        <h2 id="title" className='text-[42px] leading-[52px] mt-2.5 mb-3.5 font-outfit text-wrap font-bold text-white'>World Leading Contract Logistics Providers</h2>
                    </div>
                    <ul id="services-list" className='flex flex-col text-[#666666] max-w-4/5 mt-16'>

                        {services_list.map((service, index) => {
                            console.log(service);
                            return (
                                <ServiceItem
                                    key={index}
                                    title={service}
                                    activeItem={activeItem}
                                    onClick={() => handleItemClick(service)}
                                />
                            )
                        })}
                    </ul>
                </Container>
            </div>

            <div id="service-image" className='flex flex-col grow-1 bg-pink-100 bg-center bg-cover' style={{ backgroundImage: `url(/src/assets/${services_img[activeItem]})` }} />
        </section>
    )
}

export default Services;