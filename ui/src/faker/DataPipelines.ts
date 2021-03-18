interface IAccessUser {
    id: number,
    name: string,
    photo: string
}

interface IFakeData {
    id: number,
    title: string,
    category: string,
    status_running: number,
    status_pipeline: number,
    access_users: IAccessUser[],
    last_running: string
}
interface IListFakeData extends Array<IFakeData>{}


let fakeData: IListFakeData = [
    {
        id: 1,
        title: "Report daily Server health Proxima Centauri SRV-441",
        category: "Server Report",
        last_running: "03 Feb 2021 17:20",
        status_running: 0,
        status_pipeline: 1,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    },
    {
        id: 1,
        title: "Monitor hourly cache Redis Cluster K8S-RED-018",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 1,
        status_pipeline: 2,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    },
    {
        id: 9,
        title: "Cleanup daily trash storage S3 AWS ",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 1,
        status_pipeline: 3,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68?people,nature"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68?people'
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68?person'
            }
        ]
    },
    {
        id: 2,
        title: "Check growth storage Kafka Stream KAFS-071",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 1,
        status_pipeline: 3,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    },
    {
        id: 2,
        title: "Check growth storage Kafka Stream KAFS-071",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 1,
        status_pipeline: 3,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    },
    {
        id: 2,
        title: "Check growth storage Kafka Stream KAFS-071",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 1,
        status_pipeline: 3,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    },
    {
        id: 2,
        title: "Check growth storage Kafka Stream KAFS-071",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 1,
        status_pipeline: 3,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    },
    {
        id: 2,
        title: "Check growth storage Kafka Stream KAFS-071",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 1,
        status_pipeline: 3,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    },
    {
        id: 2,
        title: "Check growth storage Kafka Stream KAFS-071",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 1,
        status_pipeline: 3,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    },
    {
        id: 2,
        title: "Check growth storage Kafka Stream KAFS-071",
        category: "Server Report",

        last_running: "03 Feb 2021 17:20",
        status_running: 0,
        status_pipeline: 2,
        access_users: [
            {
                id: 1,
                name: "Lorem",
                photo: "https://source.unsplash.com/random/68x68"
            },
            {
                id: 2,
                name: "Gorila",
                photo: 'https://source.unsplash.com/random/68x68'
            }
        ]
    }
]
export default fakeData