# Welcome to Holtz_Bin2Dec :sunglasses:

### This application was made with **ReactJs**, and after, migrate to **NextJs**, for converter numbers of binary to decimal or on the contrary.

## **NextJs**
### You can **acess** this application in:

- **[holtzbin2dec-next.vercel.app](https://holtzbin2dec-next.vercel.app/)** (by [vercel.com](https://vercel.com/))

[Branch master](https://github.com/henriqueholtz/Holtz_Bin2Dec/tree/master)

### Characteristics:

* :heavy_check_mark: **NextJs**
* :heavy_check_mark: **Material-UI**
* :heavy_check_mark: **SASS**
* :heavy_check_mark: **Dark/Light**
* :heavy_check_mark: **Responsive**
* :heavy_check_mark: **Simple Animation**
* :heavy_check_mark: **Docker/docker-compose to development**

#### You also can clone this repository, install it (with `yarn install`), and run it (with `yarn dev`) only;
##### After, you can access from `http://localhost:3000` in your prefer browser.

### Run with Docker (2 options):
* [development] `docker build -t holtzbin2dec-next:dev . -f .\Dockerfile.dev` and soon: `docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 holtzbin2dec-next:dev`
* [development] `docker-compose -f .\docker-compose.dev.yml up --build`

## **ReactJs**
### You can **acess** this application in:

- **[holtzbin2dec.surge.sh](https://holtzbin2dec.surge.sh/)** (by [surge.sh](https://surge.sh))
-  **[henrique.holtz.github.io/Holtz_Bin2Dec](https://henriqueholtz.github.io/Holtz_Bin2Dec)** (by [github-pages](https://pages.github.com/))

[Branch holtz_bin2dec-reactjs](https://github.com/henriqueholtz/Holtz_Bin2Dec/tree/holtz_bin2dec-reactjs)

### Characteristics:

* :heavy_check_mark: **ReactJS**
* :heavy_check_mark: **Material-UI**
* :heavy_check_mark: **SASS**
* :heavy_check_mark: **Dark/Light**
* :heavy_check_mark: **Responsive**
* :heavy_check_mark: **Simple Animation**
* :heavy_check_mark: **Docker (Dockerfile + docker-compose.yml)**

&nbsp;
**[Prototype by @ncsantos.](https://www.figma.com/file/QDBBTkB1It2l7Esch1SKwl/Bin2Dec?node-id=0%3A1)** :boom:

*Inspiration from [florinpop/app-ideas](https://github.com/florinpop17/app-ideas)*


#### You also can clone this repository, install it (with `yarn install`), and run it (with `yarn run`) only;
##### After, you can access from `http://localhost:3000` in your prefer browser.

### Run with Docker (2 options):
* `docker build -t holtzbin2dec:dev .` and soon: `docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm holtzbin2dec:dev`
* `docker-compose up -d --build`

#### **A short preview:**

LightMode:
![image](https://user-images.githubusercontent.com/51380783/133703194-a5735d68-85c4-4f66-9ab9-896ec6ad101e.png)

DarkMode:
![image](https://user-images.githubusercontent.com/51380783/133703220-3fe0b2d0-b8d0-4f3d-b270-8ec49ed2d07b.png)
