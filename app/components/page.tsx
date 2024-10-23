import { Button } from "@/components/ui/button"
import Container from "@/components/ui/container"

const Components = () => {
    return (
    <section>
        <Container>
        <h1 className="text-2xl ">Components</h1>
        <div className="items-center gap-4">
            <p className="text-xl">Buttons</p>
            <div className="flex items-center gap-4">
            <Button variant="primary">Deploy project</Button>
            <Button variant="secondary">Deploy projecty</Button>
            <Button variant="light">Deploy project</Button>
            <Button variant="dark">Deploy project</Button>
            </div>
        </div>
        </Container>
    </section>
    )
}

export default Components