import React from 'react';
import { ScrollView, Text, View } from 'react-native';

function Panel1() {
  return (
    <ScrollView className="mainSection p-4 mb-[50px]">
      <View>
        <View className="Titles text-xl font-bold mb-2 text-justify">
          <Text style={{ fontWeight: 900, fontSize: 20 }}>READING PASSAGE 1</Text>
          <Text style={{ fontWeight: 900, fontSize: 20 }}>Questions 1-13</Text>
          <Text style={{ fontWeight: 900, fontSize: 20 }}>Healthy Food?</Text>
        </View>
      </View>

      <View className="mt-4">
        <Text className='text-justify mb-3' style={{ marginBottom: 15 }}>
          <Text className='text-xl font-bold mr-2' style={{ fontSize: 22 }}>A {" "}</Text>
          The shelves of every supermarket are packed with probiotic yogurts that can supposedly ease constipation and fend off infections, butter substitutes that claim to reduce cholesterol, tomato extracts said to keep skin looking young while warding off cancer, infant cereals enhanced with micronutrients essential for development, and so on. Have food companies taken on a higher level of morality or are there other motives for this concern over the health value of their produce?
        </Text>

        <Text className='text-justify mb-3' style={{ marginBottom: 15 }}>
          <Text className='text-xl font-bold mr-2' style={{ fontSize: 22 }}>B {" "}</Text>
          Food companies have taken to trumpeting the supposed health and nutritional benefits of their products for several reasons. Such products may appeal both to health-conscious buyers and to people who know they eat unhealthily, but hope that some vitamins here and some probiotics there might compensate for the junk. Best of all, from the food companies’ point of view, these “functional foods”, which blur the line between foods and drugs, hold out the promise of higher margins and faster growth. In western Europe sales of functional foods grew by 10.2% a year between 2006 and 2009, for example, whereas sales of packaged food grew by 6.3%. That is why Nestlé, the world’s biggest food company, is making a big bet on functional foods as a source of future growth.
        </Text>

        <Text className='text-justify mb-3' style={{ marginBottom: 15 }}>
          <Text className='text-xl font-bold mr-2' style={{ fontSize: 22 }}>C {" "}</Text>
          All this has attracted the attention of regulators on both sides of the Atlantic. They are concerned that some of these health claims may be misleading or unsupported by evidence, and are tightening the rules. On October 20th America’s Food and Drug Administration (FDA) said it would overhaul the rules for nutritional claims on food labels and issue new standards early next year. It has already rebuked General Mills, the maker of Cheerios, a popular breakfast cereal, for claiming that it is “clinically proven to lower cholesterol”. The European Food Safety Authority is also cracking down, requiring companies to back up health and nutrition claims with scientific studies. Hundreds of applications submitted to its scientific panel have just been turned down. The panel has decided that there is not enough evidence to claim that, for instance, heather helps you sleep, dried cocoa extract helps you lose weight, quinoa makes your hair grow and Jerusalem artichokes make your gut healthy.
        </Text>

        <Text className='text-justify mb-3' style={{ marginBottom: 15 }}>
          <Text className='text-xl font-bold mr-2' style={{ fontSize: 22 }}>D {" "}</Text>
          Many in the industry are howling that these rules are heavy-handed, given that most of their products are perfectly safe and that some health claims go back decades or more. Demanding expensive studies to justify such claims will stifle innovation, they argue, and tilt the playing field against smaller firms, which will be unable to afford them. Surely, they say, firms that find profit in adding iron, iodine, zinc and vitamins to their products, or cutting levels of high-fructose corn syrup or saturated fat, ought to be applauded, not denounced. Many food brands started off as a means of reassuring customers that products were trustworthy. The desire to defend their brands gives food firms a strong incentive to ensure that their products are safe.
        </Text>

        <Text className='text-justify mb-3' style={{ marginBottom: 15 }}>
          <Text className='text-xl font-bold mr-2' style={{ fontSize: 22 }}>E {" "}</Text>
          The situation now however is that food companies are claiming their products provide specific benefits—not merely that they are safe to eat. Ordinary folk cannot tell whether health claims made by food marketers are scientifically valid, so there is a case for regulatory scrutiny of such claims. What’s more, even though it is difficult to imagine someone being harmed by eating too much breakfast cereal or yogurt, say, there is a risk of harm if health claims made about functional foods encourage people to see them as substitutes for drugs or lifestyle changes, they may need. A few helpings of vegetables will do better than any probiotic yogurt.
        </Text>

        <Text className='text-justify mb-3' style={{ marginBottom: 15 }}>
          <Text className='text-xl font-bold mr-2' style={{ fontSize: 22 }}>F {" "}</Text>
          A lesson from the drugs industry is that industry-funded studies have a clear tendency to produce results that please their sponsors. So, food companies should have to register all studies and publish even those with unfavorable results. Clear guidelines on labelling are also important. To its credit, the FDA recently proposed rules that would force food companies to publish all the important components of their products on the front of their packages, rather than picking out the healthy ones and keeping quiet about the fat, salt and sugar.
        </Text>

        <Text className='text-justify mb-3' style={{ marginBottom: 15 }}>
          <Text className='text-xl font-bold mr-2' style={{ fontSize: 22 }}>G {" "}</Text>
          The industry’s claim that greater scrutiny will kill innovation is off the mark. Those firms making misleading claims will suffer; those prepared to invest in proper scientific studies to back up their supposed breakthroughs will benefit. And in pharmaceuticals, smaller firms seem to be more innovative than bigger ones. If food companies wish to make the sorts of claims about their products that pharmaceutical companies do, they must be prepared to submit to similar scrutiny. Extraordinary claims, after all, require extraordinary evidence.
        </Text>
      </View>
    </ScrollView>
  );
}

export default Panel1;
