import React from 'react';
import { ITicket } from '../types/tickets';
import { formatStopsLabel } from '../helpers/formatStopsLabel';
import { getAirlineLogo } from '../helpers/getAirlineLogo';
import { AirplaneImage } from './AirPlaneImage';
import { AirplaneLogo } from '../types/AirplaneLogo';

interface TicketProps {
  ticket: ITicket;
}

export const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  if (ticket === undefined) return null;
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price,
  } = ticket;

  return (
    <div className="border w-full flex h-[250px] rounded-md shadow-md">
      <div className="w-[30%] flex flex-col gap-5 border-r justify-center items-center">
        <img
          src={getAirlineLogo(carrier)}
          alt="aircraft_company_logo"
          className="w-20 mb-5"
        />
        <button className="rounded-xl py-4 px-2 bg-[#df6722] text-white">
          Купить за {price} ₽
        </button>
      </div>
      <div className="flex flex-col w-full mt-4">
        <div className="w-full flex justify-around pt-2">
          <p className=" font-bold text-4xl">{departure_time}</p>
          <div className="main2 uppercase">
            {' '}
            {stops}
            {formatStopsLabel(stops)}
          </div>
          <p className=" font-bold text-4xl">{arrival_time}</p>
        </div>
        <div className="w-full flex justify-around pt-2">
          <p className="text-lg">
            {origin}, {origin_name}
          </p>
          <div className="flex items-center px-2">
            <AirplaneImage logoDirection={AirplaneLogo.UP} />
            <div className="w-20 h-0.5 border-b border-black " />
            <AirplaneImage logoDirection={AirplaneLogo.DOWN} />
          </div>
          <p className="text-lg">
            {destination}, {destination_name}
          </p>
        </div>
        <div className="w-full flex justify-between pt-2 ">
          <p className="text-gray-500  ml-20">{departure_date}</p>
          <p className="text-gray-500 mr-20">{arrival_date}</p>
        </div>
      </div>
    </div>
  );
};
