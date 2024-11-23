
            let lastScrollPosition = 0;
            const header = document.getElementById("header");

            window.addEventListener("scroll", () => {

                  const currentScrollPosition = window.pageYOffset;
                  console.log(currentScrollPosition);

                  if (currentScrollPosition > lastScrollPosition) {
                        if (currentScrollPosition > 45) {
                              header.style.top = "-80px";
                        }
                  } else {
                        header.style.top = "0";
                  }

                  lastScrollPosition = currentScrollPosition;
            });
      </script>