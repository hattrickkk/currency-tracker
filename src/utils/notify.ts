import toast from 'react-hot-toast'

const notify = (days: number, idDark: boolean = false) => {
    const str = `The chart was successfully built for ${days} ${days === 1 ? 'day' : 'days'}!`

    toast.success(str, {
        style: {
            background: '#202025',
            color: '#fff',
        },
        iconTheme: {
            primary: '#00ce2c',
            secondary: '#FFFAEE',
        },
    })
}

export default notify
