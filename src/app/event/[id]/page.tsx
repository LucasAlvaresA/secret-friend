type Props = { params: { id: string } };

const Page = ({ params }: Props) => {
    return <div>ID {params.id} </div>;
};

export default Page;
