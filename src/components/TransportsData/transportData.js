import bikeImg from '../Home/images/bike.png'
import carImg from '../Home/images/car.png'
import busImg from '../Home/images/bus.png'
import trainImg from '../Home/images/train.png'


const transports = [
    {
        name : 'BIKE',
        img : bikeImg,
        price: 55,
        get1: 'bike1',
        get2: 'bike2',
        get3: 'bike3',
        person: 1 

    },
    {
        name : 'CAR',
        img : carImg,
        price: 66,
        get1: 'car1',
        get2: 'car2',
        get3: 'car3',
        person: 4
    },
    {
        name : 'BUS',
        img : busImg,
        price: 77,
        get1: 'bus1',
        get2: 'bus2',
        get3: 'bus3',
        person: 4
    },
    {
        name : 'TRAIN',
        img : trainImg,
        price: 77,
        get1: 'train1',
        get2: 'train2',
        get3: 'train3',
        person: 5
    }
]
export default transports