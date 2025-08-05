export default function Clock(props){
    let {locale} = props;
    return new Date().toLocaleTimeString(locale);
}

// export default Clock;