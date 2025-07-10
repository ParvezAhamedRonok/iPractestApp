const renderContent = () => {
    switch (changeTap) {
        case "Correction":
            return (
                <Compare
                    itemsSet={itemsSet}
                    imageText={imageText}
                    writingData={writingData.writinTextArea}
                    correctData={correctData}
                />
            );

        case "Evaluation":
            if (!isLoggedIn) {
                // 🔒 User is not logged in, call your login handler
                handleNotLoggedIn(); // maybe open a modal or redirect to login
                return null; // don't render anything yet
            }

            if (isLoggedIn && !paymentStatus) {
                // 💸 User is logged in but hasn't paid
                navigation.navigate("PaymentPage"); // or use a custom redirect logic
                return null;
            }

            // ✅ User is logged in and has paid
            return <EvaluationComponent />;

        case "Improvement":
            if (!isLoggedIn) {
                // 🔒 User is not logged in, call your login handler
                handleNotLoggedIn(); // maybe open a modal or redirect to login
                return null; // don't render anything yet
            }

            if (isLoggedIn && !paymentStatus) {
                // 💸 User is logged in but hasn't paid
                navigation.navigate("PaymentPage"); // or use a custom redirect logic
                return null;
            }

            // ✅ User is logged in and has paid
            return <ImprovementComponent />;

        default:
            return null;
    }
};
