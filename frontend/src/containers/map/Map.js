import { Box, Flex } from '@chakra-ui/react'
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState, useEffect } from 'react'
import React from 'react';
import "../css/btn.css"
import Modal from "./modal"
import LittleCircle from './littleCircle';
import mapStyle_1 from './mapStyle_1';
import mapStyle_2 from './mapStyle_2';
// import stations from '../stationsData/stations';
import ParkInModal from "./ParkInModal"
import axios from '../../connection';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useOutletContext } from 'react-router-dom';
import { useApp } from "../../hook";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom'
const center = { lat: 48.8584, lng: 2.2945 }


function Map () {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAS6qKe7myrJ0Sd06EorAE_zNG4mi2fwLw",
        libraries: ['places'],
    })
    
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [selected, setSelected]  = useState(null);/*儲存現在位置 */
    const [markers, setMarkers] = useState();/*儲存所有marker的arr */
    const [markerSelected, setMarkerSelected] = useState(null);/*點選到的marker(markerSelected)會跳出infowindows，且可以點選詳細內容 */
    const [modalOpen, setModalOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [showStation, setShowStation]= useState(true)
    const [time_dis, setTime_Dis] = useState({dis: "", dur: ""})
    const [openParking, setOpenParking] = useState(false)
    const [parkingSpots, setParkingSpots] = useState([])
    const [spot, setSpot] = useState("")
    const [stations, setStations] = useState([]) 
    const [mapStyle, setMapStyle] = useState([null, mapStyle_1, mapStyle_2])
    const [countStyle, setCountStyle]= useState(0)
    const [username] = useOutletContext();
    const {defaultLocation,setDefaultLocation,publicErrMes, setPublicErrMes}=useApp();
    const [errorMessage,setErrorMessage ] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    // const [stationDist, setStationDist] = useState([])
    var stationsDist=[]
        /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef("")
        /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef('')
    const time_disRef = useRef({dis: "", dur: ""})
    const distCount = useRef(0)
    // let destination=null;
    // let origin=null;
    // console.log("hi", markers)   
    
    const getStations = async()=> {
      const {
        data: { stations },
      } = await axios.get('/stations');
      // for(let i=0; i<stations.length; i++){
      //    getTime_Dis(stations[i].location)
      //   // distData.push(getTime_Dis(stations[i].location))
      // }
      setMarkers(stations)
      setStations(stations)
      return;
    }
        /*找到使用者現在定位 */
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=> {
            setSelected({lat: position.coords.latitude, lng: position.coords.longitude, time: new Date()})
            originRef.current = {lat: position.coords.latitude, lng: position.coords.longitude, time: new Date()}
            getStations()
            // console.log("selected", {lat: position.coords.latitude, lng: position.coords.longitude, time: new Date()})
        })
    }, [])
       
    useEffect(()=> {
      if(stations.length!==0){
       for(let i=0; i<stations.length; i++){
          // console.log(stations[i].location.lat, selected.lat, stations[i].location.lng)
          let dis = Math.sqrt((stations[i].location.lat-selected.lat)*111.2*111.2*(stations[i].location.lat-selected.lat) + (stations[i].location.lng-selected.lng)*110.8*110.8*(stations[i].location.lng-selected.lng))
          stationsDist.push({dist: dis*1000, label: stations[i].label})
          // saveDist(dis, stations[i].label)
          // console.log(stationsDist);
          // console.log('gugo ')
        // distData.push(getTime_Dis(stations[i].location))
        }
      // saveDist();
    }
    
      // console.log("disData", distData)
    }, [stations])

    useEffect(()=>{
      if(defaultLocation.lat!==null||selected!==null) {calculateRoute(defaultLocation); console.log("ffffffuck: ", defaultLocation)}
    },[defaultLocation, selected])

    const saveDist = async() => {
      await axios.post("/stations/distance", {
        distances: stationsDist,
    })
    }

    const getUserPosition = async() => {
      let parkingSpot=null;
      await navigator.geolocation.getCurrentPosition((position)=> {
        parkingSpot = {lat: position.coords.latitude, lng: position.coords.longitude, time: new Date(), label: stations[markerSelected].label}
        
        
        console.log("p: ", parkingSpot)
        
      })
      setSpot(stations[markerSelected].label);
      let returnValue = parkingSpot;
      return  returnValue
    }
    
        /*右鍵加入新的marker */
    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);
      
    
      
        
      
        /*顯示出路徑 */
    async function calculateRoute(destination) {
        if(destination===undefined) return
        if(!destination) return 
        console.log("des: ", destination, 'd', originRef.current, destinationRef.current)
        const origin = originRef==='' ? selected : originRef;
        // // console.log("val: ", origin,destinationRef.current.value)
        // if (/*originRef.current.value === '' || */destinationRef.current.value === '') {
        //     return
        // }
        // let destination = destinationRef.current.value
        // console.log('a',destination)
          // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current,
            destination: destination,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.BICYCLING,
        }) 
        // if(mode===1) return {dis: results.routes[0].legs[0].distance.text, dur: results.routes[0].legs[0].duration.text}
        setDirectionsResponse(results)
        setDefaultLocation({lat: null, lng: null})
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }
      
    function clearRoute() {
      // console.log(destinationRef.current)
      //   setDirectionsResponse(null)
      //   setDistance('')
      //   setDuration('')
      //   // setDestination('')
      //   // destination=''
        originRef.current = ''
        destinationRef.current = ''
        window.location.reload()
      //   // setOrigin('')
      //   // calculateRoute(1)
      //   // origin=''
    }
    
    async function getTime_Dis(location) {
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: selected,
            destination: location,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.BICYCLING,
        })
      // setTime_Dis()
      let dis = results.routes[0].legs[0].distance.text;
      let dur = results.routes[0].legs[0].duration.text
      console.log("dis: ", dis, dur)
      setTime_Dis({dis: dis, dur: dur})
      // setStationDist([...stationDist, {dis: dis, dur: dur}])
      stationsDist.push({dis: dis, dur: dur})
      console.log(stationsDist, stations.length)
      time_disRef.current = {dis: dis, dur: dur}
      // return  {dis: dis, dur: dur}
    }  

    const panToOrigin = () => {
      map.panTo(selected)
      map.setZoom(15)
    }

    const getBikeImg = () => {
      return countStyle===2 ? "bike.png" : countStyle===1 ? "bike2.png" : "bicycle-solid.svg"
    }

    const findMyBike = async() => {
      const {data:data} = await axios.get("/myBike", {
        params: {
            username
        }
    })
      originRef.current=selected
      calculateRoute(data.myBike.location)
      console.log(data.myBike)
      
    }

    const densityToColor = (density) => {
      if(density === 1) return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
      else if(density === 2) return 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
      else if(density === 3) return 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';
      else if(density === 4) return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
      else if(density === 5) return 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';
      // else return "bike.png"
      else return 'https://www.1stdynamicpersonnel.com/wp-content/uploads/2019/09/location_map_pin_gray5.png';
    }

    const handleRideMyBike = async() => {
      const {
        data: { message, myBike },
      } = await axios.post('/myBike', {
          username, parked: false, time: new Date(),
      });
      console.log("Handle post my Bike")
      // console.log(myBike, "Is it parked? " , !parked)
      if(!myBike){
          setErrorMessage("Database post my bike error!")
      } else  {
          setSuccessMessage("Successfully updated your bike status in database.")
          setTimeout(function () {
              setSuccessMessage("")
          }, 5000);//5 Second delay 
      }
      //setAllStations(stations)
    }

    const navigate = useNavigate();
    useEffect(() => {
          // TODO Part III-1: navigate the user to restaurant page with the corresponding id
          if(errorMessage==="You have already parked your bike") {navigate('/My-Bike'); setPublicErrMes("You have already parked your bike")}
    },[errorMessage])

    if (!isLoaded) {
      return <p>error</p>
      // return <SkeletonText />
    }
    return (<>
        <Box sx={{ width: window.innerWidth>410 ? '50%' : '80%', position:"fixed", left: window.innerWidth>410 ? "50%" : "58%", top:window.innerWidth>410 ? "12%" : "8%", transform: "translate(-50%, 0)" , zIndex: "3" }}>
      { errorMessage? <Collapse in={errorMessage}>
                <Alert severity='error'
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        // setErrorOpen(false);
                        setErrorMessage("");
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                {errorMessage} {/*&nbsp; &nbsp; {errorMessage==="You have already parked your bike" ? <button className='btn-5' onClick={handleRideMyBike}>ride</button> : null} */}
                </Alert>
            </Collapse> : <></>}
            
            {successMessage? <Collapse in={successMessage}>
                <Alert severity='success'
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        // setSuccessOpen(false);
                        setSuccessMessage("");
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                {successMessage}
                </Alert>
            </Collapse> : <></>}
            </Box>
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='center'
            top="8%"
            left="8%"
            right="8%"
            h='80vh'
            w='80vw'
            // h='100vh'
            // w='100vw'
          > 
          <Box className='mapBox'>
            {/* <button className="btn" style={{marginLeft: "auto", marginRight: "auto", }} 
              onClick={()=>{setOpenParking(true); setScroll(false);
            }}>Park In</button> */}
            { !(modalOpen&&scroll) ? <LittleCircle position='absolute'
              panToOrigin={panToOrigin} clearRoute={clearRoute} setShowStation={setShowStation} setOpenParking={setOpenParking} 
              setScroll={setScroll} showStation={showStation} findMyBike={findMyBike} setCountStyle={setCountStyle} countStyle={countStyle}
            ></LittleCircle> : null}
              {/* Google Map Box */}
              <GoogleMap
                center={selected ? selected : {lat:44, lng:-80}}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                  styles: mapStyle[countStyle],
                  zoomControl: false,
                  streetViewControl: false,
                  // mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onLoad={map => setMap(map)}
                onRightClick={mapsMouseEvent=>{onMapClick(mapsMouseEvent)}}//右鍵時加入新marker
              >
                <Marker title='現在位置' key={selected} position={selected} icon={{
                    url: "placeholder.png",
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30),
                    
                  }}
                />
                {markers&&showStation ? markers.map((marker, idx)=>(   
                  <Marker key={marker.location.lat+idx} position={marker.location} icon={{
                    url: densityToColor(marker.density),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                  onClick={() => {
                    setTime_Dis(getTime_Dis(marker.location)) 
                    //點選marker時跳出infowindows
                    console.log("fuck: ",getTime_Dis(marker.location))
                    // setTimeout(function(){
                    //   console.log("I am the third log after 5 seconds");
                    // },5000);
                    setMarkerSelected(idx);
                    setModalOpen(true)
                    setScroll(!scroll)
                    
                    // setDestination(marker.location)
                    // setOrigin(selected)
                    destinationRef.current = marker.location
                    originRef.current=selected
                  }}
                  ></Marker>
                )): ''}
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />//與路徑有關
                )}
              </GoogleMap>
              <Modal open={modalOpen} scroll={scroll} setScroll={setScroll} data={stations[markerSelected]} calculateRoute={()=>calculateRoute(destinationRef.current)} time_dis={time_dis} setOpenParking={setOpenParking}></Modal>
              {openParking? <ParkInModal openParking={openParking} setOpenParking={setOpenParking} getUserPosition={getUserPosition} spot={stations[markerSelected].label} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} selected={selected}></ParkInModal> : null}
            </Box>
           </Flex></>
         )
      }
export default Map;
