import './App.css';
import { Ticket } from './components/Ticket';
import { FilterForm } from './components/Form';
import { ITicket } from './types/tickets';
import ticketsData from './tickets.json';
import { useState } from 'react';
import { StopsFilter } from './types/form';

function App() {
  const [filters, setFilters] = useState<StopsFilter>({} as StopsFilter);
  const selectedStops = Object.entries(filters)
    .filter(([key, { checked }]) => checked)
    .map(([key, { value }]) => value);
  return (
    <div className="App w-[95%] mx-auto">
      <div className="flex justify-center gap-2">
        <FilterForm setFilters={setFilters} />
        <div className=" flex flex-col items-center w-[60%]">
          {ticketsData.tickets
            .filter((ticket) => {
              if (selectedStops.length === 0) {
                // Если в filters ничего не выбрано, показываем все билеты
                return true;
              }
              if (selectedStops.includes(Infinity)) {
                // Если есть Infinity в selectedStops, показываем все билеты
                return true;
              }
              return selectedStops.includes(ticket.stops);
            })
            .map((ticket: ITicket, index: number) => (
              <div key={index} className="w-full my-5">
                <Ticket ticket={ticket} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
