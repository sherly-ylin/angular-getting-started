FROM ubuntu:22.04

# Setup workspace directory
RUN mkdir /workspace
WORKDIR /workspace

# Install useful system utilities
RUN apt-get update \
	&& apt-get install --yes \
	    git \
	    curl \
        wget \
        debian-keyring \
        debian-archive-keyring \
        apt-transport-https \
        fonts-powerline \
        zsh \
        sudo \
        chromium-browser \
    && rm -rf /var/lib/apt/lists/*

# Install Caddy web server
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg \
    && curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list \
    && apt update \
    && apt install caddy

# Install Node.js 18 from https://github.com/nodesource
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get update \
    && apt-get install --yes nodejs \
    && rm -rf /var/lib/apt/lists/*

# Install Angular CLI Globally
RUN npm install -g @angular/cli

# Use a non-root user per https://code.visualstudio.com/remote/advancedcontainers/add-nonroot-user
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Add non-root user and add to sudoers
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME -s /usr/bin/zsh \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Give user ownership of node_modules volume
RUN mkdir -p /workspace/node_modules && chown $USERNAME /workspace/node_modules
VOLUME /workspace/node_modules

# Set code to default git commit editor
RUN git config --system core.editor "code --wait"

# Set Safe Directory
RUN git config --system safe.directory '/workspace'

# Configure zsh
USER $USERNAME
ENV HOME /home/$USERNAME

# Add zsh theme with niceties
RUN curl https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh | bash - \
    && sed -i 's/robbyrussell/kennethreitz/g' ~/.zshrc \
    && echo 'source <(ng completion script)' >>~/.zshrc

# Expose dev web port
EXPOSE 8080