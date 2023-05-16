import React from "react";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment-timezone' ;
import "react-big-calendar/lib/css/react-big-calendar.css";

const ScheduleHome = (props) => {
  const localizer = momentLocalizer(moment);

  const timeSchedule = props.contents;

  const tel = props.tel;
  const line = props.line;

  const [date, setDate] = useState(new Date());

  // const selectDate = timeSchedule.map((item) => {
  //   return item.date;
  // });
  const thisMonth = moment(new Date()).utc().format("MMM");

  const selectShowDate = timeSchedule.filter(
    (item) => moment(item.date).utc().format("MMM") == thisMonth
  );

  const descriptionSchedul = props.descriptionSchedule;



    const events = selectShowDate?.map((item) => {
      return {
        start: item.date,
        end: item.date,
        title: item.doctor,
      };
    });
  

  // calendar
  // const components = useMemo(() => ({
  //   event: MyEvent, // used by each view (Month, Day, Week)
  //   eventWrapper: MyEventWrapper,
  //   eventContainerWrapper: MyEventContainerWrapper,
  //   dateCellWrapper: MyDateCellWrapper,
  //   timeSlotWrapper: MyTimeSlotWrapper,
  //   timeGutterHeader: MyTimeGutterWrapper,
  //   resourceHeader: MyResourceHeader,
  //   toolbar: MyToolbar,
  //   agenda: {
  //     event: MyAgendaEvent, // with the agenda view use a different component to render events
  //     time: MyAgendaTime,
  //     date: MyAgendaDate,
  //   },
  //   day: {
  //     header: MyDayHeader,
  //     event: MyDayEvent,
  //   },
  //   week: {
  //     header: MyWeekHeader,
  //     event: MyWeekEvent,
  //   },
  //   month: {
  //     header: MyMonthHeader,
  //     dateHeader: MyMonthDateHeader,
  //     event: MyMonthEvent,
  //   }
  // }), [])
  return (
    <div
      className="grid items-center grid-cols-6 text-white"
      style={{
        backgroundImage: `url("/asset/image/menu/HomeP_Ourtiming.png")`,
        backgroundSize: "1800px 1200px",
      }}
    >
      <div className="col-span-6 lg:col-span-3">
        <h5 className="bg-gradient-to-r m-5 from-[#F66B3C] to-[#F66B3C] p-2 text-lg w-56 my-5">
          book an appointment
        </h5>
        <h3 className="text-4xl">Our Timing</h3>
        <p className="my-5 text-sm">{descriptionSchedul}</p>
        <div className="flex flex-col my-5 overflow-auto h-52">
          {
            selectShowDate?
          selectShowDate.map((time, index) => {
            return (
              <div key={index} className="flex flex-row my-5">
                <h4 className="w-16 mx-5 text-md">
                  {moment(time.date).utc().local().format("dddd")}
                </h4>
                <h5 className="mx-5 text-md" key={index}>
                  {moment(time.date).utc().local().format("DD MMMM YYYY")}
                </h5>
                <h5 className="mx-5 bg-gray-400 text-md" key={index}>
                  {time.from.slice(0, 5)} to {time.to.slice(0, 5)}
                </h5>
              </div>
            );
          }):''}
        </div>
        <div className="bg-[#F66B3C] p-5 m-5 flex justify-end">
          <h5 className="text-4xl">Tel : {tel}</h5>
        </div>
        <div className="bg-[#008900] p-5 m-5 flex justify-end">
          <h5 className="text-4xl">Line : {line}</h5>
        </div>
      </div>
      {/* right */}
      <div className="col-span-6 p-5 lg:col-span-3">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{
            height: "50vh",
            width: "auto",
            backgroundColor: '#008900',
            color: '#ffffff',
            borderRadius: '4px',
            border: 'none'
          }}
          views={{ month: true, week: false, day: false, agenda: false }}
        />
      </div>
    </div>
  );
};

export default ScheduleHome;
