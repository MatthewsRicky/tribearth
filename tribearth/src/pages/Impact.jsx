import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Ethicalgems from '../assets/Ethicalgems.jpg'
import Fairtrade from '../assets/Fairtrade.jpg'
import Green from '../assets/green.png'
import Womenempowerment from '../assets/Womenempowerment.jpeg'

function Impact() {
  return (
    <div className='relative'>
      <Nav></Nav >

      <div className='flex mx-auto h-10 w-48 mt-32'>
        <h1>Tribearth sustains 30% of LocalAid’s humanitarian work. To learn more of LocalAid’s work in Kenya, please visit localaid.or.ke</h1>
      </div>

      <div className='flex flex-wrap justify-around items-center my-32'>




        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Ethicalgems}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Ethical Gemstones</h1>
            <p className="text-gray-700 text-base">
              Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.
            </p>
          </div>
        </div>


        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Fairtrade}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Fair Trade</h1>
            <p className="text-gray-700 text-base">
              FASHION IS THE LARGEST INDUSTRIAL EMPLOYER OF WOMEN AND LESS THAN 2% ARE ACTUALLY PAID A LIVING WAGE.</p>

            <p className='mt-4'>Our vision is to empower women by providing them with fair and ethical means in which to earn a living. We promote gender equality in a sector that have long been male dominated. We place special emphasis on training and development that empowers the women working at the workshop.
            </p>
          </div>
        </div>
        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Green}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Green Workshop</h1>
            <p className="text-gray-700 text-base">
              We are passionate about preserving our planet for future generations. Our workshop, based in Diani, Kenya, operates using sustainable interventions, such as our recycling plant which includes recycling waste material and water. Additionally, we recycle our waste metals to re-create designs. We are working on setting up solar systems for our power and water harvesting systems
            </p>
          </div>
        </div>
        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Womenempowerment}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Womens Empowerment</h1>
            <p className="text-gray-700 text-base">
              We believe that when Kenyan women have the freedom to reach their potential, all Kenyan families and communities grow stronger. Tribearth recognizes the potential that women living with HIV/AIDS have and the role they can play to improve the country’s economy.
            </p>
          </div>
        </div>
      </div>



      <Footer />
    </div >
  )
}

export default Impact