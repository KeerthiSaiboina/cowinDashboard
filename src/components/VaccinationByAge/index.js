// Write your code here

import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  return (
    <div>
      <h1>Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="18-44" fill=" #a3df9f" />
          <Cell name="18-44" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
