import { FC, ReactNode } from "react";
import styles from "../../../styles/PageWrapper.module.scss";

type pageWrapperProps = {
    children: ReactNode;
};

const PageWrapper: FC<pageWrapperProps> = ({ children }) => {
    let isLoggedIn: boolean = true;

    return (
        <div className={styles["page-wrapper"]}>
            <header className={styles["page-wrapper__header"]}>
                <div
                    className={`${
                        styles["page-wrapper__functionality-block"]
                    } ${
                        !isLoggedIn
                            ? styles["functionality-block_logged-out"]
                            : null
                    }`}
                >
                    {/* TODO: temporary until we do not have dropdown menu component */}
                    <div className="page-wrapper__languages-list languages-list">
                        <span>English ↓</span>
                    </div>
                    {isLoggedIn ? (
                        <a
                            className={styles["page-wrapper__sign-in-link"]}
                            href="#"
                        >
                            Log Out
                        </a>
                    ) : (
                        <></>
                    )}
                </div>
                {isLoggedIn ? (
                    <h1 className={styles["page-wrapper__title"]}>
                        GeneralSoft Taxi
                    </h1>
                ) : (
                    <></>
                )}
            </header>
            <section className={styles["page-wrapper__content"]}>
                {children}
            </section>
        </div>
    );
};

export default PageWrapper;
