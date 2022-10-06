import React, { Component } from 'react';
import { Dispatch , SetStateAction} from 'react';
import {getDayData} from '../../axiosInstance';
import { addDaysToDateString } from '../../utils/dateFunctions';
import type { DayData , ErrorResponseData} from '../../typescript/type';

import DayForm from '../DayForm';
import DayChangeButton from '../DayChangeButton';
import DayContent from '../DayContent';

import './index.css';

const initialDayData :DayData = {
    title:"StargateMilkyWay",
    date : "2022-08-17",
    hdurl :"https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_1800.jpg",
    media_type :"image",
    url:"https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_960.jpg",
}
const initialDayError :ErrorResponseData = {
    code : '',
    msg : '',
    servide_version :'',
}

type Props = {}

type State = {
    isDayLoading : boolean
    imgDayDate: string
    dayData: DayData,
    dayError: ErrorResponseData,
}

class Day extends Component<Props, State> {
    constructor(props:any) {
        super(props);
        
        this.state = {
            isDayLoading : true,
            imgDayDate: '2022-08-17',
            dayData: initialDayData,
            dayError: initialDayError,
        }
        this.loadDayImgData=this.loadDayImgData.bind(this);
        this.handleChangeDateInput=this.handleChangeDateInput.bind(this);
        this.handleButtonPlusOneDay=this.handleButtonPlusOneDay.bind(this);
        this.handleButtonMinusOneDay=this.handleButtonMinusOneDay.bind(this);
        this.handleDayDate=this.handleDayDate.bind(this);
        this.handleDayError=this.handleDayError.bind(this);
    };

    handleDayDate(obj: DayData){
        this.setState({dayData : obj});
    }
    handleDayError(obj : ErrorResponseData){
        this.setState({dayError : obj});
    }

    async loadDayImgData (){
        this.setState({isDayLoading : true});
        await getDayData(this.handleDayDate,this.handleDayError,this.state.imgDayDate);     
    }
    handleChangeDateInput (e:React.ChangeEvent<HTMLInputElement>)  {
        e.preventDefault();
        this.setState({imgDayDate : e.target.value});
    }
    handleButtonPlusOneDay (e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        const dateStringPlusOneDay = addDaysToDateString(this.state.imgDayDate,1)
        this.setState({imgDayDate : dateStringPlusOneDay});
    }
    handleButtonMinusOneDay (e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        const dateStringPlusOneDay = addDaysToDateString(this.state.imgDayDate,-1)
        this.setState({imgDayDate : dateStringPlusOneDay});
    }

    componentDidMount(): void {
        console.log('montage Day');
        this.loadDayImgData(); 
        this.setState({isDayLoading : false});
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevState.imgDayDate !== this.state.imgDayDate){
            console.log('update Day');
            this.loadDayImgData(); 
            this.setState({isDayLoading : false});
        }
        if (prevState.dayData !== this.state.dayData){
            console.log('update Day');
            this.setState({dayError : initialDayError});
            this.setState({isDayLoading : false});
        }
    }


    render() {
        return (

            <div > 
        <DayForm 
            onChange = {this.handleChangeDateInput}
            />
        <div className='dayInformation'>
            <DayChangeButton
                sign=' < '
                onClick ={this.handleButtonMinusOneDay}
                />
                {this.state.imgDayDate}
            <DayChangeButton
                sign=' > '
                onClick ={this.handleButtonPlusOneDay}
                />
        </div>
        {this.state.isDayLoading ? 
            <div>#######loading</div> 
            : 
            <div>
            <DayContent
                errorResponseData = {this.state.dayError}
                dayData = {this.state.dayData}
                ></DayContent>
            </div>
        }
        </div>);
  
  }
}

export default Day


// component Function

// import React, { Component } from 'react';
// import { Dispatch , SetStateAction} from 'react';
// import {getDayData} from '../../axiosInstance';
// import { addDaysToDateString } from '../../utils/dateFunctions';
// import type { DayData , ErrorResponseData} from '../../typescript/type';

// import DayForm from '../DayForm';
// import DayChangeButton from '../DayChangeButton';
// import DayContent from '../DayContent';

// import './index.css';

// const initialDayData :DayData = {
//     title:"StargateMilkyWay",
//     date : "2022-08-17",
//     hdurl :"https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_1800.jpg",
//     media_type :"image",
//     url:"https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_960.jpg",
// }
// const initialDayError :ErrorResponseData = {
//     code : '',
//     msg : '',
//     servide_version :'',
// }

// type Props = {}

// type State = {
//     isDayLoading : boolean
//     imgDayDate: string
//     dayData: DayData,
//     dayError: ErrorResponseData,
// }

// const Day: React.FunctionComponent = () => {
//     const [isDayLoading, setIsDayLoading]:[boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true);
//     const [imgDayDate, setImgDayDate]:[string, Dispatch<SetStateAction<string>>] = React.useState('2022-08-17');
//     const [dayData, setDayData]:[DayData, Dispatch<SetStateAction<DayData>>] = React.useState(initialDayData);
//     const [dayError, setDayError]:[ErrorResponseData, Dispatch<SetStateAction<ErrorResponseData>>] = React.useState(initialDayError);

//     const loadDayImgData =  async () => {
//         setIsDayLoading(true);
//         await getDayData(setDayData,setDayError,imgDayDate);     
//     }
    
//     const handleChangeDateInput = (e:React.ChangeEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         setImgDayDate(e.target.value);
//     }
    
//     const handleButtonPlusOneDay = (e: React.MouseEvent<HTMLButtonElement>)=>{
//         e.preventDefault();
//         const dateStringPlusOneDay = addDaysToDateString(imgDayDate,1)
//         setImgDayDate(dateStringPlusOneDay);
//     }
//     const handleButtonMinusOneDay = (e: React.MouseEvent<HTMLButtonElement>)=>{
//         e.preventDefault();
//         const dateStringPlusOneDay = addDaysToDateString(imgDayDate,-1)
//         setImgDayDate(dateStringPlusOneDay);
//     }


//     React.useEffect(()=>{
//         setDayError(initialDayError);
//     },[dayData]);

//     React.useEffect(()=>{
//         loadDayImgData(); 
//         setIsDayLoading(false);
//     },[imgDayDate]);

//     return (<div > 
//         <DayForm 
//             onChange = {handleChangeDateInput}
//         />
//         <div className='dayInformation'>
//             <DayChangeButton
//                 sign=' < '
//                 onClick ={handleButtonMinusOneDay}
//                 />
//                 {imgDayDate}
//             <DayChangeButton
//                 sign=' > '
//                 onClick ={handleButtonPlusOneDay}
//             />
//         </div>
//         {isDayLoading ? 
//             <div>#######loading</div> 
//             : 
//             <div>
//             <DayContent
//                 errorResponseData = {dayError}
//                 dayData = {dayData}
//             ></DayContent>
//             </div>
//         }
//         </div>);
// };

// export default Day;