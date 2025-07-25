import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["G"], ["D"], ["C"], ["F"],
    ["architects"],
    ["moisture"],
    ["layers"],
    ["speed"],
    ["C"], ["A"], ["B"], ["D"], ["A"], 
    ["iii"], ["viii"], ["vi"], ["v"], ["vii"], ["i"], ["iv"],
     ["A"], ["C"], ["B"],
    ["speed"],
    ["fifty"],
    ["strict"],
    ["B"], ["A"], ["C"], ["C"],
     ["H"], ["D"], ["F"], ["E"], ["B"], 
    ["NO"], ["NOT GIVEN"], ["YES"], ["NO"], ["NOT GIVEN"]

  ]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{
      // console.log(window.getSelection().toString());
      makeEditableAndHighlight("green");
  }}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br />READING PASSAGE 1</div> <br />
          <h5>You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.</h5> <br />
          <h5 className=' w-full mt-2'>Materials to take us beyond concrete</h5> <br />
        </div>
      </div>

      <div className='mb-3'>
      <h5>Concrete is everywhere, but it’s bad for the planet, generating large amounts of carbon dioxide –</h5><br />

        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>Concrete is the second most used substance in the global economy, after water – and one of the world’s biggest single sources of greenhouse gas emissions. The chemical process by which cement, the key ingredient of concrete, is created results in large quantities of carbon dioxide. The UN estimates that there will be 9.8 billion people living on the planet by mid-century. They will need somewhere to live. If concrete is the only answer to the construction of new cities, then carbon emissions will soar, aggravating global warming. And so scientists have started innovating with other materials, in a scramble for alternatives to a universal commodity that has underpinned our modem life for many years.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>The problem with replacing concrete is that it is so very good at what it does. Chris Cheeseman, an engineering professor at Imperial College London, says the key thing to consider is the extent to which concrete is used around the world, and is likely to continue to be used. ‘Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is the scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue.’</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvellous properties: Portland cement, the vital component of concrete, is mouldable and pourable, but quickly sets hard. Cheeseman also notes another advantage: concrete and steel have similar thermal expansion properties, so steel can be used to reinforce concrete, making it far stronger and more flexible as a building material than it could be on its own. According to Cheeseman, all these factors together make concrete hard to beat. ‘Concrete is amazing stuff. Making anything with similar properties is going to be very difficult.’
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>A possible alternative to concrete is wood. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> Using wood to construct buildings, however, is not straightforward. Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire. But treating wood and combining it with other materials can improve its properties. Cross-laminated timber is engineered wood. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks. This material is light but has the strength of concrete and steel. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span> Stora Enso is Europe’s biggest supplier of cross-laminated timber, and its vice-president Markus Mannstrom reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. Finland, with its large forests, where Stora Enso is based, has been leading the way, but the company is seeing a rise in demand for its timber products across the world, including in Asia. Of course, using timber in a building also locks away the carbon that it absorbed as it grew. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>G</span>Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix. Fly ash, a byproduct of coal-burning power plants, can be incorporated into concrete mixes to make up as much as 15 to 30% of the cement, without harming the strength or durability of the resulting mix. Iron-ore slag, a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas emissions.
          But Anna Surgenor, of the UK’s Green Building Council, notes that although these waste products can save carbon in the concrete mix, their use is not always straightforward. ‘It’s possible to replace the cement content in concrete with waste products to lower the overall carbon impact. But there are several calculations that need to be considered across the entire life cycle of the building- these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective.’
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>H</span> While these technologies are all promising ideas, they are either unproven or based on materials that are not abundant. In their overview of innovation in the concrete industry, Felix Preston and Johanna Lehne of the UK’s Royal Institute of International Affairs reached the conclusion that, ‘Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present, these alternatives are rarely as cost-effective as conventional cement, and they face raw-material shortages and resistance from customers.’
        </p>
      </div>

    </section>
  )
}

export default Panel1