import { Segmented } from "antd"
import { SegmentedValue } from "antd/es/segmented";
import { useNavigate } from 'react-router-dom';

const SegmentedComponent  = ({ selectedSegmented ="now_playing" }) => {

  const navigate = useNavigate();

  const handleNavigate = (value: SegmentedValue) => {
    navigate("/"+value.toString())
  } 

  return (
    <>
      <Segmented 
        block size='middle'
        defaultValue={selectedSegmented}
        onChange={handleNavigate}
        options={[
          {
            label: (
              <div style={{ marginLeft: 10 }}>
                <div>Now playing</div>
              </div>
            ),
            value: 'now_playing'
          },
          {
            label: (
              <div style={{ marginLeft: 10 }}>
                <div>Popular</div>
              </div>
            ),
            value: 'popular'
          },
          {
            label: (
              <div style={{ marginLeft: 10 }}>
                <div>Top rated</div>
              </div>
            ),
            value: 'top_rated'
          },
          {
            label: (
              <div style={{ marginLeft: 10 }}>
                <div>Upcoming</div>
              </div>
            ),
            value: 'upcoming'
          }
        ]} 
        />
    </>
  )
}

export default SegmentedComponent;