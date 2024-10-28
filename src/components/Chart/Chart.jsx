import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const studentData = [
        {id: 1, name: "A", math: 85, english: 78, bangla: 92},
        {id: 2, name: "B", math: 72, english: 85, bangla: 79},
        {id: 3, name: "C", math: 90, english: 88, bangla: 95},
        {id: 4, name: "D", math: 68, english: 75, bangla: 70},
        {id: 5, name: "E", math: 82, english: 80, bangla: 88},
        {id: 6, name: "F", math: 75, english: 90, bangla: 82},
        {id: 7, name: "G", math: 92, english: 85, bangla: 90},
        {id: 8, name: "H", math: 65, english: 72, bangla: 68},
        {id: 9, name: "I", math: 88, english: 87, bangla: 93},
        {id: 10, name: "J", math: 78, english: 82, bangla: 80}
    ];
    return (
        <div className='pt-20 mt-8 flex justify-center bg-red-300'>
            <LineChart width={900} height={500} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line type="monotone" dataKey="math" stroke='blue'></Line>
            <Line type="monotone" dataKey="bangla" stroke='green'></Line>
            <Line type="monotone" dataKey="english" stroke='red'></Line>
            
            </LineChart>
        </div>
    );
};

export default Chart;