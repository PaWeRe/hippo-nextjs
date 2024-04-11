import styles from './scan.module.css'

function Scan() {
    return (
        <div>
            <div className={styles.scanParameters}>
                <div>Invert Colors</div>
                <div>Raw Gradients</div>
                <div>Reset Layers</div>
            </div>
            <div>
                <img className={styles.scan}
                    src='/test_xray.png'
                    alt='test scan'
                />
            </div>
        </div>
    )
}

export default Scan;