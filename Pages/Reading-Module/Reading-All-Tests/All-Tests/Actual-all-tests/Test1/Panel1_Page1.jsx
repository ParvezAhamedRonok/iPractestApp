import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function Panel1() {
  return (
    <ScrollView className="p-4 mb-[50px]">
      {/* Section 1 - Language */}
      <View className="mb-4">
        <Text className="" style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'serif' }}>SECTION 1</Text>
        <Text className="" style={{ fontSize: 19, fontWeight: 'bold', fontFamily: 'serif' }}>Questions 1-13</Text>
        <Text className="" style={{ fontSize: 18, fontWeight: 'bold', color: 'purple' }}>Language {"\n"} {"\n"}</Text>
        <Text className="text-justify" style={{ fontFamily: 'serif' }}>
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>A  {" "}</Text>
          Languages around the world are dying off at a tremendous rate. It is estimated that by the end of this century, 90% of the world’s languages will have ceased to exist. The languages that are most in danger of extinction are those spoken by a very small number of people. When these people die, the language dies with them. In fact, it is estimated that one language dies every two weeks. Yet each language contains words and expressions which reflect the culture of the people who speak it. The loss of these languages will lead to the loss of cultural knowledge and linguistic diversity.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>B {" "}</Text>
          Languages are dying as improved transport and access to media spread the use of a few major languages. Young people see the advantages of speaking these languages and gradually stop speaking their native tongue.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>C {" "}</Text>
          The most basic reason why linguistic diversity should be preserved is that it helps us to understand the full range of human cognitive abilities and the many ways that people can interpret the world. If everyone spoke only one language, our understanding of the human mind and culture would be greatly diminished.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>D {" "}</Text>
          Linguists are especially interested in the rules of syntax that exist in each language. Some languages, such as Lardil, an Australian Aboriginal language, have different rules for men and women. In some American Indian languages, the gender of the speaker determines the grammatical form. But perhaps the most surprising feature of some languages is the binary distinction.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>E {" "}</Text>
          Hale also argued that language should be seen as a source of community strength and pride. He worked with a number of indigenous communities in the United States to help them revive their languages. It is generally accepted among linguists that language revival strengthens a sense of identity in communities and promotes social harmony. Language is not only a means of communication but also a means of establishing a connection between the past and the present.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>F {" "}</Text>
          In a similar vein, Lardil has about 90 words to describe tides and currents, a reflection of the importance of fishing to the community. Much of this knowledge is lost to young speakers who are switching to English, and Lardil is dying out.
        </Text>
      </View>

      {/* Section 2 - Hard Languages */}
      <View className="mb-4">
        <Text className="" style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'serif' }}>{"\n"}Reading Passage 2</Text>
        <Text className="" style={{ fontSize: 19, fontWeight: 'bold', fontFamily: 'serif' }}>Questions 14-26</Text>
        <Text className="" style={{ fontSize: 18, fontWeight: 'bold', color: 'purple' }}>HARD LANGUAGES  {"\n"} {"\n"}</Text>
        <Text className="text-justify" style={{ fontFamily: 'serif' }}>
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>A {" "}</Text>
          A certain genre of books about English extols it as a relatively simple language, with a small number of grammatical rules and an accessible vocabulary. But language learning is never purely easy. English has its own difficulties, such as irregular spellings and a wealth of idiomatic expressions. Moreover, the notion of a “simple” language depends on what you’re used to. You may say “a” dog but “the” truth in English, yet “a” he but “the” truth in many languages.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>B {" "}</Text>
          It may be natural to think that your own tongue is the easiest. But to outsiders, even English can appear bizarre, with confusing phrasal verbs and silent letters. The spelling of “knight” makes sense to no one. Words like “colonel” and “queue” are absurdly spelled.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>C {" "}</Text>
          Perhaps the “hardest” language studied by linguists is Archi, spoken in a mountain village in the Caucasus. It has 1.5 million possible word forms. A verb in Archi can take hundreds of endings to show different tenses, moods, aspects and agreement with the subject and object. Such complexity shows just how much the world’s languages differ overall.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>D  {" "}</Text>
          Even before learning a word, the foreigner is struck by sound. The click languages of southern Africa, such as Xhosa and Zulu, sound completely alien. So do the tones of Chinese and Vietnamese, or the nasal ones of French, Portuguese and Polish.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>E  {" "}</Text>
          Yet much more exotic vowels exist. Some languages make use of throat or laryngeal articulation that most Western learners find impossible. Georgian clusters several consonants together. Khmer has long strings of consonants with few vowels. Others distinguish between glottalised and non-glottalised sounds, and pronounce a sound differently depending on the speaker’s social status. Some scripts indicate tones; others leave pronunciation through a series of complex rules.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>F  {" "}</Text>
          Consonants are more complex. Some (p, t, k, m and n) are common in almost every language. Others, such as retroflex sounds found in India, are rare elsewhere. Ubykh, another Caucasian language, has 80 consonants and only two vowels. Some Polynesian languages do the reverse: they have just a few consonants and the simplest sounds of any language family.
          {"\n\n"}
          <Text className="text-xl font-bold mr-2" style={{ fontSize: 22 }}>G {" "}</Text>
          Beyond sound comes the problem of grammar. Many African languages mark grammatical tense not with verbs but with pronouns. Some Australian languages show case with prefixes rather than suffixes. And in many indigenous American languages, verbs do not exist at all in the traditional sense. Whether difficult or easy, every language has its beauty and logic. For learners, the journey does matter more than the destination.
        </Text>
      </View>
    </ScrollView>
  );
}
