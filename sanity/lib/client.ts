import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk9wqOwFvVNVtgm4sn0hpRpIBnXskz7rST1fK8U838zn6vCSvUv4VBpZ9wI94G6wNFNo6YOmuIaeH0cIE5IvtoMjswDZTn8CmcNhZ4QYmSh6a2spNHhgXll7d34RVt3yzZSuif1A3HGjtuZznHYIfBvMSqxDIZmtqCmHEMcV8PAd4vFvTXsC",
})
