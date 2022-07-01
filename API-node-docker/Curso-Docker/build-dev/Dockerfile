FROM  python:3.6
LABEL maintainer  'Aluno Cod3r <aluno at cod3r.com.br>'

#Comando em shell executados em um único RUN 
# Para nao criar várias Layers

RUN useradd www && \
          mkdir /app && \
          mkdir /log && \
          chown www /log

# Definindo usuário que sera iniciado
USER www

# Criar para acessar este volume a partir de outro container 
# Como se /log fosse compartilhado por outros containers
VOLUME /log

WORKDIR /app

# Porta que vai rodar o servidor
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/python"]

CMD ["run.py"]