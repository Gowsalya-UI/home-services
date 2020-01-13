export interface ServiceList {
    serviceList : lists[]
}

export interface lists {
    serviceType : string,
    serviceLists: ServiceLists[],
}

export interface ServiceLists{
    id: string,
    desc: string
}

export interface FormRequest {
    timings: string,
    description: string
}
