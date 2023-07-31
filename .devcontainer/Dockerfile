FROM debian:10

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    && apt-get -y install git iproute2 procps curl gnupg2 lsb-release

# Install Hugo
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && curl -sL https://github.com/gohugoio/hugo/releases/download/v0.115.4/hugo_0.115.4_linux-arm64.deb -o hugo.deb \
    && dpkg -i hugo.deb \
    && rm hugo.deb

# Install PostCSS CLI globally
RUN npm install -g postcss-cli

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog
