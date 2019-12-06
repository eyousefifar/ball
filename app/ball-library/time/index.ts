import {action, decorate, observable} from "mobx";
import {getTimeAndDate} from "./api";
import moment from "moment-jalaali";

class TimeClass {
    nowDate: string = '';
    nowTime: string = '';

    getTime() {
        return this.nowTime
    }
    getDate() {
        return this.nowDate
    }

    setDateAndTime = (timeStamp:any) => {
        let a = new Date(timeStamp);

        let hours = "0" + a.getHours();
        let minutes = "0" + a.getMinutes();
        let seconds = "0" + a.getSeconds();

        // console.warn('Hours : ', hours.substr(-2));

        this.nowTime = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        this.nowDate = moment(a).format('jYYYY/jM/jD');
    };

    getTimeAndDate = async () => {
        let res = await getTimeAndDate();

        if (res.state === 'success') {
            this.setDateAndTime(res.time)
        }
    }
}

decorate(TimeClass, {
    //observables
    nowDate: observable,
    nowTime: observable,

    //actions
    setDateAndTime:action

});

const timeClass = new TimeClass();

export default timeClass;
