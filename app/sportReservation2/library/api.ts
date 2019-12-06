import {baseUrl} from '../../ball-library'
import {SansesRes, SansList, Sans} from './types'
import moment from "moment-jalaali";
import qs from "qs";


export const getSanes = async (sportId: string, monthIndex: number, dayIndex: number, gender: 'مرد' | 'زن'): Promise<SansesRes> => {
    let persianDate = `1398/${monthIndex + 1}/${dayIndex + 1}`;
    let normalDate = moment(persianDate, 'jYYYY/jM/jD').format('YYYY-M-D');

    let filterQuery = qs.stringify({
        odataStr: `$filter=date eq '${normalDate}' and genderType eq '${gender}'`
    });

    try {
        let response = await fetch(`${baseUrl}/api/sportSites/${sportId}/sessions/userType/customer?${filterQuery}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let responseJson: Array<SansList> = await response.json();

        // console.warn('Sanses Response : ',responseJson);

        if (response.status === 200) {
            return {
                state: "success",
                sanses: responseJson
            }
        } else {
            return {
                state: 'failed',
                sanses: []
            }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            sanses: []
        }
    }
};

const providerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNjhkNzc2MGQtM2EzYy00YThjLTlhNDQtNjk0MmMwNTljOTg1Iiwicm9sZSI6InByb3ZpZGVyIiwiZGV2aWNlVG9rZW4iOm51bGwsImlhdCI6MTU3NTI4Njk1MSwiZXhwIjoxNTc1NDY2OTUxfQ.tT59RbNcptxUoDoIhhp3opkGWC8-SKJvrpv83zCvGxk'


export const makeFakeData = async (dateArray: Array<string>, times: Array<string>): Promise<SansesRes> => {
    for (let date of dateArray) {
        for (let timeUUID of times) {
            for (let i = 0; i < 2; i++) {
                try {
                    let response = await fetch(`${baseUrl}/api/sportSites/sessions`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${providerToken}`,
                        },
                        body: JSON.stringify({
                            date: date,
                            capacity: 20,
                            price: 5000,
                            genderType: 'مرد',
                            sportType: 'فوتسال',
                            qualityType: 'معمولی',
                            sessionTimeUUID: timeUUID
                        }),
                    });
                    let responseJson = await response.json();

                    console.warn('FakeData Response : ', responseJson);

                    if (response.status === 201) {
                        await confirmSans(responseJson.uuid);

                    } else {
                        console.warn('Error not 200 code :',response.status)
                    }

                } catch (e) {
                    console.warn(e.toString());
                }
            }

            for (let i = 0; i < 2; i++) {
                try {
                    let response = await fetch(`${baseUrl}/api/sportSites/sessions`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${providerToken}`,
                        },
                        body: JSON.stringify({
                            date: date,
                            capacity: 20,
                            price: 5000,
                            genderType: 'زن',
                            sportType: 'فوتسال',
                            qualityType: 'معمولی',
                            sessionTimeUUID: timeUUID
                        }),
                    });
                    let responseJson = await response.json();

                    console.warn('FakeData Response : ', responseJson);

                    if (response.status === 201) {

                        await confirmSans(responseJson.uuid);
                    } else {
                       console.warn('Error not 200 code :',response.status)
                    }

                } catch (e) {
                    console.warn(e.toString());
                    return {
                        state: 'failed',
                        sanses: []
                    }
                }
            }
        }
    }
};


export const confirmSans = async (uuid: string): Promise<SansesRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/sportSites/sessions/${uuid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${providerToken}`,
            },
            body: JSON.stringify({
                enableStatus:true
            }),
        });

        if (response.status === 200) {
            console.warn('Confirmed OK');
        } else {
           console.warn('Did not confirmed')
        }

    } catch (e) {
        console.warn(e.toString());
    }

};


export const postFakeImage = async (sportSites:Array<string>) => {
    for (let sportSite of sportSites){
        try {
            let response = await fetch(`${baseUrl}/api/sportSites/media`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${providerToken}`,
                },
                body: JSON.stringify({
                    sportSiteUUID:sportSite,
                    file:require('../../home2/assets/sports/8.jpg')
                }),
            });
            let responseJson  = await response.json();

            console.warn('Home Response : ', responseJson);


            switch (response.status) {
                case 200:
                    return {
                        state: 'success',
                        sportLists: responseJson.sportSites,
                        banners: responseJson.baners,
                        message: 'صفحه خانه'
                    };
                case 500:
                    return {
                        state: 'failed',
                        sportLists: [],
                        banners: [],
                        message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                    };
                default:
                    return {
                        state: 'failed',
                        sportLists: [],
                        banners: [],
                        message: 'خطای ناشناخته'
                    }
            }
        } catch (e) {
            console.warn(e.toString());
            return {
                state: 'failed',
                sportLists: [],
                banners: [],
                message: e.toString(),
            }
        }

    }





};
