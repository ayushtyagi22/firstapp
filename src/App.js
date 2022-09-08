import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

  const colors = ['red','green','blue','purple','pink','orange','white','yellow','silver','brown','grey','olive','charcoal','magenta','bronze','tan','teal','mustard','coral','lavender','mauve','ruby','cyan','turquoise','mint']

  const [color,setColor] = useState(colors)
  const [count,setCount] = useState(0)

  const ShuffleCells = () => {
	setCount(count + 1)
  }

  useEffect(() => {
		setColor(colors.sort(() => Math.random() - 0.5));
  },[count]);

  return (
    <div align="center">
<table className='tableClass'>
<tr>
	<td bgcolor={color[0]}>Cell 1</td>
	<td bgcolor={color[1]}>Cell 2</td>
	<td bgcolor={color[2]}>Cell 3</td>
	<td bgcolor={color[3]}>Cell 4</td>
	<td bgcolor={color[4]}>Cell 5</td>
</tr>
<tr>
	<td bgcolor={color[5]}>Cell 6</td>
	<td bgcolor={color[6]}>Cell 7</td>
	<td bgcolor={color[7]}>Cell 8</td>
	<td bgcolor={color[8]}>Cell 9</td>
	<td bgcolor={color[9]}>Cell 10</td>
</tr>
<tr>
	<td bgcolor={color[10]}>Cell 11</td>
	<td bgcolor={color[11]}>Cell 12</td>
	<td bgcolor={color[12]}>Cell 13</td>
	<td bgcolor={color[13]}>Cell 14</td>
	<td bgcolor={color[14]}>Cell 15</td>
</tr>
<tr>
	<td bgcolor={color[15]}>Cell 16</td>
	<td bgcolor={color[16]}>Cell 17</td>
	<td bgcolor={color[17]}>Cell 18</td>
	<td bgcolor={color[18]}>Cell 19</td>
	<td bgcolor={color[19]}>Cell 20</td>
</tr>
<tr>
	<td bgcolor={color[20]}>Cell 21</td>
	<td bgcolor={color[21]}>Cell 22</td>
	<td bgcolor={color[22]}>Cell 23</td>
	<td bgcolor={color[23]}>Cell 24</td>
	<td bgcolor={color[24]}>Cell 25</td>
</tr>
</table>
<br/>
<button onClick={ShuffleCells}>Change Color</button>
    </div>
  );
}

export default App;
