import classNames from "classnames";
import style from "./classPage.module.scss"
import appStyle from "./../App.module.scss"
import { Section } from "./section";
export const ClassSections = ({ sections }) => {
    sections=sections.filter((s)=>s.meetings.length>0 &&s.instructors.length>0).sort((a,b)=>{
        if ( a.section_number < b.section_number ){
            return -1;
          }
          if ( a.section_number > b.section_number ){
            return 1;
          }
          return 0;
    });
    return (
        <div className={style.sections}>
            <div>
                <h4>Available Sections</h4>
            </div>
            <hr />
            <div className={classNames(style.sectionGrid, appStyle.grid)}>
                {
                    sections.map((s, index) => (
                        <Section section={s} key={index}/>
                    ))
                }

            </div>
        </div>

    );

}