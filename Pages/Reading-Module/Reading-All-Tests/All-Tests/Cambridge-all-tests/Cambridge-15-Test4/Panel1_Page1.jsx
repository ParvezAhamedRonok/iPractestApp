import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    // Passage 1
    ["water"], ["diet"], ["drought"], ["erosion"], ["desert"], ["branches"],
    ["IN EITHER ORDER", "leaves", "bark"], ["trunk"], ["NOT GIVEN"], ["FALSE"], ["TRUE"],
    ["FALSE"], ["NOT GIVEN"],

    // Passage 2
    ["NOT GIVEN"], ["FALSE"], ["TRUE"], ["FALSE"], ["FALSE"], ["TRUE"], ["words"],
    ["finger"], ["direction"], ["commands"], ["fires"], ["technology"], ["award"],

    // Passage 3
    ["D"], ["E"], ["F"], ["H"], ["B"], ["C"], ["D"], ["B"], ["YES"],
    ["NOT GIVEN"], ["NO"], ["YES"], ["NOT GIVEN"], ["D"]
  ];

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)





  return (
    <section className='mainSection p-4 mb-[50px]' onMouseDown={() => {
      // console.log(window.getSelection().toString());
      makeEditableAndHighlight("green");
    }}>
      <div className='text-inherit'>
        <div className="Titles text-inherit font-bold mb-4 text-justify">
          <div className=''>SECTION 1 <br />
            READING PASSAGE 1</div><br />
          <div>Questions 1-13</div>
        </div>
      </div>


      <div className='main-Passages'>
        <div className='text-center mb-2 mt-3'>
          <h4>The return of the huarango</h4>
          <i>The arid valleys of southern Peru are welcoming the return of a native plant</i>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>
            The south coast of Peru is a narrow, 2,000-kilometre-long strip of desert squeezed between the Andes and the Pacific Ocean. It is also one of the most fragile ecosystems on Earth. It hardly ever rains there, and the only year-round source of water is located tens of metres below the surface. This is why the huarango tree is so suited to life there: it has the longest roots of any tree in the world. They stretch down 50-80 metres and, as well as sucking up water for the tree, they bring it into the higher subsoil, creating a water source for other plant life.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span> Dr David Beresford-Jones, archaeobotanist at Cambridge University, has been studying the role of the huarango tree in landscape change in the Lower Ica Valley in southern Peru. He believes the huarango was key to the ancient people’s diet and, because it could reach deep water sources, it allowed local people to withstand years of drought when their other crops failed. But over the centuries huarango trees were gradually replaced with crops. Cutting down native woodland leads to erosion, as there is nothing to keep the soil in place. So when the huarangos go, the land turns into a desert. Nothing grows at all in the Lower Ica Valley now.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>For centuries the huarango tree was vital to the people of the neighbouring Middle Ica Valley too. They grew vegetables under it and ate products made from its seed pods. Its leaves and bark were used for herbal remedies, while its branches were used for charcoal for cooking and heating, and its trunk was used to build houses. But now it is disappearing rapidly. The majority of the huarango forests in the valley have already been cleared for fuel and agriculture – initially, these were smallholdings, but now they’re huge farms producing crops for the international market.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>‘Of the forests that were here 1,000 years ago, 99 per cent have already gone,’ says botanist Oliver Whaley from Kew Gardens in London, who, together with ethnobotanist Dr William Milliken, is running a pioneering project to protect and restore the rapidly disappearing habitat. In order to succeed, Whaley needs to get the local people on board, and that has meant overcoming local prejudices. ‘Increasingly aspirational communities think that if you plant food trees in your home or street, it shows you are poor, and still need to grow your own food,’ he says. In order to stop the Middle Ica Valley going the same way as the Lower Ica Valley, Whaley is encouraging locals to love the huarangos again. ‘It’s a process of cultural resuscitation,’ he says. He has already set up a huarango festival to reinstate a sense of pride in their eco-heritage, and has helped local schoolchildren plant thousands of trees.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>‘In order to get people interested in habitat restoration, you need to plant a tree that is useful to them,’ says Whaley. So, he has been working with local families to attempt to create a sustainable income from the huarangos by turning their products into foodstuffs. ‘Boil up the beans and you get this thick brown syrup like molasses. You can also use it in drinks, soups or stews.’ The pods can be ground into flour to make cakes, and the seeds roasted into a sweet, chocolatey ‘coffee’. ‘It’s packed full of vitamins and minerals,’ Whaley says.
            And some farmers are already planting huarangos. Alberto Benevides, owner of Ica Valley’s only certified organic farm, which Whaley helped set up, has been planting the tree for 13 years. He produces syrup and flour, and sells these products at an organic farmers’ market in Lima. His farm is relatively small and doesn’t yet provide him with enough to live on, but he hopes this will change. ‘The organic market is growing rapidly in Peru,’ Benevides says. ‘I am investing in the future.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> But even if Whaley can convince the local people to fall in love with the huarango again, there is still the threat of the larger farms. Some of these cut across the forests and break up the corridors that allow the essential movement of mammals, birds and pollen up and down the narrow forest strip. In the hope of counteracting this, he’s persuading farmers to let him plant forest corridors on their land. He believes the extra woodland will also benefit the farms by reducing their water usage through a lowering of evaporation and providing a refuge for bio-control insects.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span>‘If we can record biodiversity and see how it all works, then we’re in a good position to move on from there. Desert habitats can reduce down to very little,’ Whaley explains. ‘It’s not like a rainforest that needs to have this huge expanse. Life has always been confined to corridors and islands here. If you just have a few trees left, the population can grow up quickly because it’s used to exploiting water when it arrives.’ He sees his project as a model that has the potential to be rolled out across other arid areas around the world. ‘If we can do it here, in the most fragile system on Earth, then that’s a real message of hope for lots of places, including Africa, where there is drought and they just can’t afford to wait for rain.’
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1