import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
  if(Array.isArray(date)){
    date.forEach((item,index)=>{
      console.log( item.format('YYYY-MM-DD'));
    });
  }else{
    console.log(date.format('YYYY-MM-DD'));
  }

}

export default () => (
  <div>
    <DatePicker onChange={onChange}/>
    <br/>
    <MonthPicker onChange={onChange} placeholder="Select month"/>
    <br/>
    <RangePicker onChange={onChange}/>
    <br/>
    <WeekPicker onChange={onChange} placeholder="Select week"/>
  </div>
);

