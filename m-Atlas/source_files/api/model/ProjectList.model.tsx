interface ProjectListResponse {
    links: LinkProjectList[];
    results: GroupProjectList[];
    totalCount: number;
}

interface LinkProjectList {
    href: string;
    rel: string;
}

interface GroupProjectList {
    clusterCount: number;
    created: string;
    id: string;
    links: LinkProjectList[];
    name: string;
    orgId: string;
    tags: TagProjectList[];
}

interface TagProjectList {
    key?: string;
    value?: string;
}
