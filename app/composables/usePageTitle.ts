import { useHead } from "#imports"
import { useRoute } from "vue-router"

export function usePageTitle(title: string) {
    useHead({ title }) // set the browser tab title/SEO
    useRoute().meta.title = title // store it in route.meta for reading elsewhere
    return title
}
