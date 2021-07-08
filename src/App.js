//lib
import { DatePicker, Menu  } from 'antd';
import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import HeadCol from './components/component/HeadCol/HeadCol';


//cus
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DropdownBase from './components/base/Dropdown/Dropdown';
import CartBase from './components/component/CartBase/CartBase';
import CardShelf from './components/component/CardSheft/CardShelf';
import Screen from './components/component/Sreen/Screen';
import CardShelfMin from './components/component/CardShelfMin/CardShelfMin';
import CardCountTotal from './image/CardCount/CardCountTotal';
import CardCountActive  from './image/CardCount/CardCountActive';
import CardCountempty from './image/CardCount/CardCountempty';

const shelf = [
  {
    number_stt: '01',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '02',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '03',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '04',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '05',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '06',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '07',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '08',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '09',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '10',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '11',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '12',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '13',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
]

const shelf2 = [
  {
    number_stt: '14',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '15',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '16',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '17',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '18',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '19',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '20',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '21',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '22',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '23',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '24',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '25',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '26',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true
  },
  {
    number_stt: '27',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
  {
    number_stt: '28',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false
  },
]

const shelf3 = [
  {
    number_stt: '01',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: false,
  },
  {
    number_stt: '02',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true,
    isMin: false,
  },
  {
    number_stt: '03',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: false,
  },
  {
    number_stt: '04',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true,
    isMin: false,
  },
  {
    number_stt: '05',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: false,
  },
  {
    number_stt: '06',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: false,
  },
  {
    number_stt: '07',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true,
    isMin: false,
  },
  {
    number_stt: '08',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: false,
  },
  {
    number_stt: '09',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true,
    isMin: true,
  },
  {
    number_stt: '10',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: true,
  },
  {
    number_stt: '11',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: true,
  },
  {
    number_stt: '12',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: true,
  },
  {
    number_stt: '13',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: true,
  },
  {
    number_stt: '14',
    desc: 'Total Usage Times',
    number_count: '110',
    active: true,
    isMin: true,
  },
  {
    number_stt: '15',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: true,
  },
  {
    number_stt: '16',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: true,
  },
  {
    number_stt: '17',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: true,
  },
  {
    number_stt: '18',
    desc: 'Total Usage Times',
    number_count: '110',
    active: false,
    isMin: true,
  },
]

function App() {
  const [dataShelf,setDataShelf] = useState(shelf) // data show kệ 1
  const [dataShelf2,setDataShelf2] = useState(shelf2) // data show kệ 2
  const [dataShelf3,setDataShelf3] = useState(shelf3) // data show kệ 2
  const [totalShelfUse,setTotalShelfUse] = useState() // count tổng lần số tủ đã được sử dụng
  const [isShelfEmpty,setShelfEmpty] = useState() // count tủ rổng
  const [isShelfActive,setShelfActive] = useState() // count tủ đang được sử dụng
  const [isCheckDropdown,setCheckDropdown] = useState(false) //

  // const { Option } = Select;
  
  //set Count page 1
  useEffect(() => {
    if(dataShelf && dataShelf2 && !isCheckDropdown){

      //count shelf1
      const newArr = dataShelf.map(item =>  parseInt(item.number_count)) // get count data shelf 1
      const newArr2 = dataShelf2.map(item =>  parseInt(item.number_count)) // get count data shelf 2

      const item1 = newArr.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue
      })
      const item2 = newArr2.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue
      })

      let total = item1 + item2;
      setTotalShelfUse(total)

      // tính tủ đang giữ đồ và tủ đang rỗng
      let demShelf1 = 0;
      let demShelfEmpty = 0;
      for(let i = 1; i < dataShelf.length ; i++){
        let item = dataShelf[i];
        if(item.active === true){
          demShelf1++
        }else{
          demShelfEmpty++
        }
      }
      // console.log(demShelf1)
      let demShelf2 = 0;
      let demShelfEmpty2 = 0;
      for(let j = 1; j < dataShelf2.length ; j++){
        let item = dataShelf2[j];
        if(item.active === true){
          demShelf2++
        }else{
          demShelfEmpty2++
        }
      }
      // console.log(demShelf2)
      let totalShelfActive = demShelf1 + demShelf2;
      let totalShelfEmpty = demShelfEmpty + demShelfEmpty2;
      setShelfActive(totalShelfActive)
      setShelfEmpty(totalShelfEmpty)
    }else{
      if(dataShelf3){
            const newArr = dataShelf3.map(item =>  parseInt(item.number_count)) // get count data shelf 1
            // console.log(newArr)
            const item = newArr.reduce((accumulator, currentValue) =>{
              return accumulator + currentValue
            })
            // console.log('item: ',item);
            setTotalShelfUse(item)
            let dem = 0;
            let demShelfEmpty = 0;
            for(let j = 1; j < dataShelf3.length ; j++){
              let item = dataShelf3[j];
              if(item.active === true){
                dem++
              }else{
                demShelfEmpty++
              }
            }
      
            setShelfActive(dem)
            setShelfEmpty(demShelfEmpty)
          }
    }
  }, [dataShelf,dataShelf2,dataShelf3,isCheckDropdown])

  //get time day current
  const getTimeDay = () => {
    const format = "HH:mm DD-MM-YYYY"
    let date = new Date();
    const dateTime = moment(date).format(format);
    return dateTime;
  }

  // change picker
  const onChange = () => {

  }

  // handle click dropdown
  function handleMenuClick(e) {
    const item = e.key
    if(item === '2'){
      setCheckDropdown(true)
    }else{
      setCheckDropdown(false)
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        Landmark 81
      </Menu.Item>
      <Menu.Item key="2">
        Landmark 82
      </Menu.Item>
    </Menu>
  );

  //handle click shelf
  const handleClickShelf = (id) =>{
    // console.log('id: ',id)
    const newData = [].concat(dataShelf); //data kệ 1
    const newData2 = [].concat(dataShelf2); //data kệ 2
    const newData3 = [].concat(dataShelf3); //data kệ 2
    
    for(let i = 0; i<newData.length; i++){
      let item = newData[i];
      if(item.number_stt === id){
        item.active = !item.active // set
        if(item.active === true){
          item.number_count ++
        }
      }
    }
    //
    for(let i = 0; i<newData2.length; i++){
      let item = newData2[i];
      if(item.number_stt === id){
        item.active = !item.active // set
        if(item.active === true){
          item.number_count ++
        }
      }
    }
    //
    for(let i = 0; i<newData3.length; i++){
      let item = newData3[i];
      if(item.number_stt === id){
        item.active = !item.active // set
        if(item.active === true){
          item.number_count ++
        }
      }
    }

      setDataShelf(newData) // set lại data kệ 1
      setDataShelf2(newData2) // set lại data kệ 2
      setDataShelf3(newData3) // set lại data kệ 2
  }


  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="content_right">
          <div className="content_title">
            <div className="content_title-left">
              <p>Current time</p>
              {/* <span className="time">09:00 28/08/2019</span> */}
              <span className="time">{getTimeDay()}</span>
            </div>
            <div className="content_title-right">
              <div className="date"> <DatePicker style={{ height: '36px', borderRadius: '6px' }} onChange={onChange} /></div>
              <div className="region">
                <DropdownBase
                  title="Region"
                  item="Ho Chi Minh"
                />
              </div>
              <div className="store">
                <DropdownBase
                  title="store"
                  item="Landmark 81"
                  isRed
                  isIcon
                  menu={menu}
                />
                {/* <Select className="select" defaultValue="Landmark 81" style={{ width: 208 , height: 36 }} onChange={handleChangeSelect}>
                    <Option value="1">Landmark 81</Option>
                    <Option value="2">Landmark 82</Option>
                </Select> */}
              </div>
            </div>          
          </div>

          <div className="card_count">
            <div className="row">
              <div className="col col-lg-4 col-md-6 col-sm-12 pb-4">
                <CartBase
                  img={<CardCountTotal />}
                  count={totalShelfUse}
                  description="Total Usage Times"
                  className="total"
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 pb-4">
                <CartBase
                  img={<CardCountActive />}
                  count={isShelfActive}
                  description="CAbins In Use"
                  className="active"
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 pb-4">
                <CartBase
                   img={<CardCountempty />}
                  count={isShelfEmpty}
                  description="Cabins Avaliable"
                  className="empty"
                />
              </div>
            </div>
          </div>
          
          <div className="shelf">
            {
              !isCheckDropdown
              ?
              <div className="row">
              <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className="grid_header">
                  <div className="item2">
                  <HeadCol isHead/>
                  </div>
                  <div className="item2">
                  <HeadCol />
                  </div>
                  <div className="item2">
                  <HeadCol />
                  </div>
                </div>
                <div className="grid">
                    <div className="item1">
                      <Screen />
                    </div>
                    {
                      dataShelf && dataShelf.map((item, index) => {
                        return (
                          <div key={index} className="item2" onClick={()=>handleClickShelf(item.number_stt)}>
                            <CardShelf
                              numberStt={item.number_stt}
                              desc={item.desc}
                              numberCount={item.number_count}
                              active={item.active}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
              </div>
              <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="grid_header">
                  <div className="item2">
                  <HeadCol isHead/>
                  </div>
                  <div className="item2">
                  <HeadCol />
                  </div>
                  <div className="item2">
                  <HeadCol />
                  </div>
                </div>
                <div className="grid">
                    {
                      dataShelf2 && dataShelf2.map((item, index) => {
                        return (
                          <div key={index} className="item2" onClick={()=>handleClickShelf(item.number_stt)}>
                            <CardShelf
                              numberStt={item.number_stt}
                              desc={item.desc}
                              numberCount={item.number_count}
                              active={item.active}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
              </div>
            </div>
            :
              <div className="row">
              <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="grid_header">
                  <div className="item2">
                    <HeadCol isHead/>
                  </div>
                  <div className="item2">
                  <HeadCol />
                  </div>
                  <div className="item2">
                  <HeadCol />
                  </div>
                </div>
                <div className="grid_2">
                    <div className="item1">
                      <Screen />
                    </div>
                    {
                      dataShelf3 && dataShelf3.map((item, index) => {
                        return (
                          <>
                          {
                            item.isMin 
                            ?
                            <div key={index} className="item3" onClick={()=>handleClickShelf(item.number_stt)}>
                              <CardShelfMin
                                numberStt={item.number_stt}
                                desc={item.desc}
                                numberCount={item.number_count}
                                active={item.active}
                              />
                            </div>
                            :
                            <div key={index} className="item2" onClick={()=>handleClickShelf(item.number_stt)}>
                              <CardShelf
                                numberStt={item.number_stt}
                                desc={item.desc}
                                numberCount={item.number_count}
                                active={item.active}
                              />
                            </div>
                          }
                          </>
                        )
                      })
                    }
                  </div>
              </div>
              </div>
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
