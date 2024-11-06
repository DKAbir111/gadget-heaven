import PropTypes from 'prop-types'
export default function Help({ data }) {
    const { question, answer } = data
    return (
        <div className='bg-white px-5 py-10 md:p-10 rounded-lg shadow-lg flex flex-col gap-3  duration-700 hover:scale-[1.03]'>
            <h1 className='text-xl font-semibold text-[#9538E2]'>{question}</h1>
            <p className='opacity-75'>{answer}</p>
        </div>
    )
}
Help.propTypes = {
    data: PropTypes.object.isRequired,
}