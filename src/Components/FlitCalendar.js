import moment from "moment";
import Calendar from "react-calendar";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Center } from "@chakra-ui/react";
import { useState } from "react";

export default function FlitCalendar({date, mark, ...props }) {
    return (
        <Calendar
            // calendarType="Hebrew"
            defaultValue={date}
            onChange={(e) => props.onChange(e)}
            formatDay={(locale, date) => moment(date).format("DD")}
            formatShortWeekday={(locale, date) => moment(date).format("ddd").toUpperCase()}
            formatMonthYear={(locale, date) => moment(date).format("M월")}
            nextLabel={<MdChevronRight style={{ width: "30px", height: "25px" }} />}//">"
            next2Label=""//">>"
            prevLabel={<MdChevronLeft style={{ width: "30px", height: "25px" }} />}//"<"
            prev2Label=""//"<<"
            tileContent={({ date, view }) => {
                if (mark && mark.find(({ markdate }) => (markdate === moment(date).format("YYYY-MM-DD")))) {
                    return (
                        <>
                            <Center>
                                <div className="dot" />
                            </Center>
                        </>

                    );
                }
            }}
        />
    )
}