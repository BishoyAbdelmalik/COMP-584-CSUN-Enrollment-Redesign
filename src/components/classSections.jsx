import classNames from "classnames";
import style from "./classPage.module.scss"
import appStyle from "./../App.module.scss"
import { Section } from "./section";
import { useState } from "react";
import SortBy from "./sortingBy";
import { SORTING_OPTIONS } from "../constants/userConstants";

const sortingOptions = {
    section: (a, b) => {
        if (a.section_number < b.section_number) {
            return -1;
        }
        if (a.section_number > b.section_number) {
            return 1;
        }
        return 0;
    },
    type: (a, b) => {
        if (a.meetings[0].location === "ONLINE") {
            return -1;
        }
        return a.meetings[0].location.localeCompare(b.meetings[0].location);
    },
    time: (a, b) => a.meetings[0].start_time.localeCompare(b.meetings[0].start_time),
    enrollment: (a, b) => {
        a = a.enrollment_cap - a.enrollment_count;
        b = b.enrollment_cap - b.enrollment_count;
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    },
    waitlist: (a, b) => {
        a = a.waitlist_count;
        b = b.waitlist_count;
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
}

export const ClassSections = ({ sections }) => {
    const [sort, setSort] = useState(SORTING_OPTIONS[0].value);
    sections = sections.filter((s) => s.meetings.length > 0 && s.instructors.length > 0).sort(sortingOptions[sort]);
    return (
        <div className={style.sections}>
            <div className={classNames("d-flex", "justify-content-between")}>
                <h2 className="m-0">Available Sections</h2>
                <SortBy onChange={(value) => setSort(value)} defaultValue={sort} options={SORTING_OPTIONS} />
            </div>
            <hr />
            <div className={classNames(style.sectionGrid, appStyle.grid)}>
                {
                    sections.map((s, index) => (
                        <Section section={s} key={index} />
                    ))
                }

            </div>
        </div>

    );

}