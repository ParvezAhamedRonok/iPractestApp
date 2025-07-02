import React from 'react'
import { Text, View } from 'react-native'
import NavigationFull from './DComponents/NavigationFull'
import { useRouter, usePathname } from 'expo-router';

export default function Main() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            <NavigationFull />
            {
                pathname.includes("/Dashboard") && <View>
                    <Text>
                        This is Dashboard Component
                    </Text>
                </View>
            }
            {
                pathname.includes("/LeaderBoard") && <View>
                    <Text>
                        This is Leaderboard
                    </Text>
                </View>
            }
            {
                pathname.includes("/Speaking-Records") && <View>
                    <Text>
                        This is Speaking Records
                    </Text>
                </View>
            }
            {
                pathname.includes("/Let's-Practice") && <View>
                    <Text>
                        This is Let's-Practice
                    </Text>
                </View>
            }
            {
                pathname.includes("/SOPFile") && <View>
                    <Text>
                        This is SOPFile
                    </Text>
                </View>
            }
            {
                pathname.includes("/Referrals") && <View>
                    <Text>
                        This is Referrals
                    </Text>
                </View>
            }


            {
                pathname.includes("/Zoom-link") && <View>
                    <Text>
                        This is Zoom-link
                    </Text>
                </View>
            }
            {
                pathname.includes("/Batch-Details") && <View>
                    <Text>
                        This is Batch Details
                    </Text>
                </View>
            }

        </>
    )
}
