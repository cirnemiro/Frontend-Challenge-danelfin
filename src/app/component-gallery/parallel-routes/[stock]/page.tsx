export default function Dashboard() {
    return null
}
export async function generateMetadata({params}) {
    return {
        robots: {
            index: false,
            follow: false,
            nocache: false,
            googleBot: {
                index: false,
                follow: false,
            }
        },
    }
}
