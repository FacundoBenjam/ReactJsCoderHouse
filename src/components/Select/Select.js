



const Select = ({options, onSelect }) => {

     return (
      <select>
        {
           options.map((opt) => <option key={opt.value} value={opt.value}>{options.text}</option>)
        }
      </select>
     )

}

export default Select;