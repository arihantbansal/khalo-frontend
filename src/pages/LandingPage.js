import {
	Flex,
	Container,
	Heading,
	Stack,
	Text,
	Button,
	Icon,
	Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LandingPage = () => {
	return (
		<Container maxW={"5xl"}>
			<Stack
				textAlign={"center"}
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}>
				<Heading
					mb={6}
					fontSize={{ base: "4xl", md: "6xl" }}
					fontWeight="bold"
					lineHeight="none"
					letterSpacing={{ base: "normal", md: "tight" }}
					color={"gray.100"}>
					<Text
						display={{ base: "block", lg: "inline" }}
						w="full"
						bgClip="text"
						bgGradient="linear(to-r, green.800, primary.500)"
						fontWeight="extrabold">
						Food
					</Text>{" "}
					ordering made easy
				</Heading>
				<Text
					px={{ base: 0, lg: 24 }}
					mb={6}
					fontSize={{ base: "lg", md: "xl" }}
					color={"gray.300"}>
					Order food from the top restaurants in town from the comfort of your
					bed. No more waiting in line for the restaurant to open.
				</Text>
				<Stack
					direction={{ base: "column", sm: "row" }}
					mb={{ base: 4, md: 8 }}
					spacing={2}
					justifyContent={{ sm: "left", md: "center" }}>
					<Link as={RouterLink} to="/signup">
						<Button
							as="a"
							variant="solid"
							colorScheme="gray"
							display="inline-flex"
							alignItems="center"
							justifyContent="center"
							w={{ base: "full", sm: "auto" }}
							mb={{ base: 2, sm: 0 }}
							size="lg"
							cursor="pointer">
							Get Started
							<Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</Icon>
						</Button>
					</Link>
				</Stack>
				<Flex w={"full"}>
					<Illustration
						height={{ sm: "24rem", lg: "28rem" }}
						mt={{ base: 12, sm: 16 }}
					/>
				</Flex>
			</Stack>
		</Container>
	);
};

const Illustration = props => {
	return (
		<Icon
			width="100%"
			viewBox="0 0 702 448"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M734.9185,816.384,567.5059,514.54639a4.50306,4.50306,0,0,0-2.23438-3.60755,4.45118,4.45118,0,0,0-2.41845-.58429c-.02686-.00207-.0542-.00042-.08155-.002-.02734.00159-.05468-.00006-.08154.002a4.44216,4.44216,0,0,0-4.63281,4.04755L380.62455,816.384a4.49988,4.49988,0,1,0,7.79395,4.5L562.65189,524.3476,727.12455,820.884a4.49988,4.49988,0,1,0,7.79395-4.5Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<polygon
				points="381.871 689.362 400.794 685.02 393.053 609.967 365.125 616.374 381.871 689.362"
				fill="#ffb6b6"
			/>
			<path
				d="M549.66107,728.33969l-26.92944,6.17755-8.61045-16.827-.48752-.59653a26.77629,26.77629,0,0,1-6.01512-16.5787L485.236,641.30825l-1.83024-.87013a11.02207,11.02207,0,0,1-4.523-15.9356l-2.36955-6.26753-66.86207.12272-.06668-.01877-82.10563-23.03173,8.62112-51.39125L359.196,558.44443c7.61055-.49394,137.98028-8.4983,150.02406,20.71842,10.725,26.01751,26.18,70.467,37.25651,103.17393a25.53273,25.53273,0,0,0,2.051,4.225,18.44268,18.44268,0,0,1,2.93677,8.86467,21.59367,21.59367,0,0,0,.78268,4.05611c4.60361,13.76246-2.41,28.49411-2.48132,28.64173Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<path
				d="M528.63826,758.32154l6.15233-1.41159,21.77906-15.27844,15.11442,6.81359.00175-.0004a28.14646,28.14646,0,0,1,33.72525,21.139l.20449.89145-70.47847,16.17034Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<path
				d="M249.245,760.00706c1.9239-20.941,14.19023-41.90707,33.86412-49.33368a96.88953,96.88953,0,0,0,2.14043,66.48675c3.3222,8.16987,7.868,16.91081,5.26046,25.33611-1.62234,5.24245-5.87118,9.35-10.6833,11.98756-4.81242,2.63758-10.20365,3.9942-15.52769,5.325l-1.02709.90654C254.14372,801.77062,247.32111,780.94805,249.245,760.00706Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#f0f0f0"
			/>
			<path
				d="M283.31919,711.06143a82.8145,82.8145,0,0,0-19.08061,47.24488,35.66275,35.66275,0,0,0,.76395,11.14767,20.45422,20.45422,0,0,0,5.38916,9.31886c2.37262,2.44432,5.0826,4.66983,6.81972,7.64833a12.52416,12.52416,0,0,1,.9398,10.19932c-1.31436,4.19886-4.05905,7.675-6.86126,10.98117-3.11132,3.67084-6.40118,7.43439-7.62052,12.20761-.14774.57835-1.0365.31529-.889-.26218,2.12146-8.3046,9.95851-13.2348,13.52953-20.768,1.66631-3.51511,2.28338-7.55368.49987-11.15046-1.55961-3.14523-4.35221-5.44259-6.77592-7.89675a21.82617,21.82617,0,0,1-5.60894-8.9155,32.969,32.969,0,0,1-1.18972-11.07717,80.34462,80.34462,0,0,1,5.081-24.59192,84.28289,84.28289,0,0,1,14.36763-24.761c.38183-.45624,1.01461.22181.63527.67508Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M264.30786,752.69231a12.42481,12.42481,0,0,1-9.87071-12.7051.46382.46382,0,0,1,.92692.0165,11.5051,11.5051,0,0,0,9.206,11.79963c.58434.11925.31881,1.00754-.26219.889Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M269.02545,777.69191a23.94779,23.94779,0,0,0,10.24583-14.1284c.14979-.5778,1.03858-.31491.889.26219a24.90931,24.90931,0,0,1-10.6916,14.68021c-.50389.3212-.94436-.49454-.44321-.814Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M272.5461,726.98469a7.033,7.033,0,0,0,6.65065-.55213c.49957-.32743.93953.4887.44321.814a7.88112,7.88112,0,0,1-7.356.62711.479.479,0,0,1-.3134-.57558.46577.46577,0,0,1,.57558-.3134Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M344.93913,745.98012c-.30612.21332-.61225.42665-.9185.64781a92.6218,92.6218,0,0,0-11.53975,9.62135c-.28108.26731-.56191.54245-.83472.81728A97.64351,97.64351,0,0,0,311.3829,786.761a94.82393,94.82393,0,0,0-4.76,13.59853c-1.71145,6.41778-3.05648,13.51247-6.68141,18.83344a16.26654,16.26654,0,0,1-1.21642,1.60434L264.45755,821.898c-.07914-.03658-.1584-.06537-.23791-.10194l-1.36619.10651c.04719-.24413.10137-.49632.14856-.74045.02678-.14173.0612-.28371.088-.42543.02027-.09457.04092-.18919.05381-.27568.00663-.0315.01365-.063.02053-.08674.01289-.08649.034-.16546.04719-.24413q.4485-2.11575.92832-4.23256c-.00026-.00782-.00026-.00782.00713-.01589a139.42479,139.42479,0,0,1,10.73844-31.165c.14723-.2943.29382-.59642.4567-.89122a90.48439,90.48439,0,0,1,7.7275-12.58252,79.99247,79.99247,0,0,1,5.12866-6.26144,66.51838,66.51838,0,0,1,16.2368-12.99672c12.082-6.88393,26.2312-9.82718,39.49344-6.28522C344.26772,745.79041,344.59967,745.88144,344.93913,745.98012Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#f0f0f0"
			/>
			<path
				d="M344.87606,746.41752a82.81446,82.81446,0,0,0-43.67948,26.23454,35.66307,35.66307,0,0,0-6.1017,9.36074,20.45429,20.45429,0,0,0-1.30765,10.68524c.42275,3.38013,1.24661,6.78868.84034,10.21271a12.52414,12.52414,0,0,1-5.39032,8.70941c-3.57744,2.56121-7.86182,3.68426-12.08975,4.63689-4.69432,1.05773-9.587,2.082-13.43439,5.159-.46616.37282-1.0174-.37231-.55194-.74457,6.6938-5.35349,15.91957-4.57153,23.30632-8.43634,3.44679-1.80339,6.371-4.65645,7.11246-8.60207.64838-3.45028-.19818-6.96593-.6558-10.38468a21.82624,21.82624,0,0,1,.88932-10.4955,32.96931,32.96931,0,0,1,5.7193-9.5608A80.34493,80.34493,0,0,1,318.39571,756.616,84.28291,84.28291,0,0,1,344.77527,745.496c.57956-.1344.67657.788.10079.92149Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M304.63191,768.21131a12.42481,12.42481,0,0,1-.23186-16.08716c.38108-.45868,1.11175.112.73016.57125a11.50509,11.50509,0,0,0,.24627,14.964c.39477.447-.35206.99642-.74457.55194Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M293.34716,791.01241a23.9478,23.9478,0,0,0,16.687-5.112c.46747-.37116,1.01885.37385.55195.74457a24.90931,24.90931,0,0,1-17.37515,5.28424c-.59571-.04691-.45627-.96343.13621-.91677Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M326.68745,752.64521a7.033,7.033,0,0,0,5.64259,3.5633c.596.03934.45593.95586-.1362.91678a7.88113,7.88113,0,0,1-6.251-3.92813.479.479,0,0,1,.09631-.64826.46577.46577,0,0,1,.64826.09631Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M809.89513,760.00706c-1.9239-20.941-14.19024-41.90707-33.86412-49.33368a96.88959,96.88959,0,0,1-2.14043,66.48675c-3.3222,8.16987-7.868,16.91081-5.26047,25.33611,1.62234,5.24245,5.87119,9.35,10.68331,11.98756,4.81242,2.63758,10.20365,3.9942,15.52769,5.325l1.02709.90654C804.99642,801.77062,811.819,780.94805,809.89513,760.00706Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#f0f0f0"
			/>
			<path
				d="M775.82094,711.06143a82.81443,82.81443,0,0,1,19.08061,47.24488,35.66274,35.66274,0,0,1-.76394,11.14767,20.45415,20.45415,0,0,1-5.38917,9.31886c-2.37261,2.44432-5.0826,4.66983-6.81972,7.64833a12.52416,12.52416,0,0,0-.93979,10.19932c1.31436,4.19886,4.05905,7.675,6.86126,10.98117,3.11132,3.67084,6.40117,7.43439,7.62052,12.20761.14774.57835,1.03649.31529.889-.26218-2.12146-8.3046-9.95851-13.2348-13.52953-20.768-1.66631-3.51511-2.28339-7.55368-.49987-11.15046,1.55961-3.14523,4.35221-5.44259,6.77592-7.89675a21.82617,21.82617,0,0,0,5.60894-8.9155,32.96955,32.96955,0,0,0,1.18972-11.07717,80.34491,80.34491,0,0,0-5.081-24.59192,84.28311,84.28311,0,0,0-14.36763-24.761c-.38183-.45624-1.01461.22181-.63528.67508Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M794.83228,752.69231a12.42481,12.42481,0,0,0,9.87071-12.7051.46382.46382,0,0,0-.92693.0165,11.5051,11.5051,0,0,1-9.206,11.79963c-.58435.11925-.31882,1.00754.26219.889Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M790.11468,777.69191a23.94787,23.94787,0,0,1-10.24583-14.1284c-.14978-.5778-1.03858-.31491-.889.26219a24.90927,24.90927,0,0,0,10.6916,14.68021c.50388.3212.94436-.49454.4432-.814Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M786.594,726.98469a7.033,7.033,0,0,1-6.65065-.55213c-.49957-.32743-.93952.4887-.44321.814a7.88114,7.88114,0,0,0,7.356.62711.479.479,0,0,0,.31339-.57558.46576.46576,0,0,0-.57558-.3134Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M714.201,745.98012c.30612.21332.61225.42665.9185.64781a92.6218,92.6218,0,0,1,11.53975,9.62135c.28108.26731.5619.54245.83472.81728A97.64351,97.64351,0,0,1,747.75724,786.761a94.82389,94.82389,0,0,1,4.76,13.59853c1.71146,6.41778,3.05648,13.51247,6.68141,18.83344a16.2682,16.2682,0,0,0,1.21643,1.60434l34.26752,1.10071c.07913-.03658.1584-.06537.23791-.10194l1.36619.10651c-.04719-.24413-.10138-.49632-.14856-.74045-.02679-.14173-.06121-.28371-.088-.42543-.02027-.09457-.04093-.18919-.05382-.27568-.00663-.0315-.01364-.063-.02052-.08674-.01289-.08649-.03405-.16546-.04719-.24413q-.4485-2.11575-.92832-4.23256c.00025-.00782.00025-.00782-.00713-.01589a139.42532,139.42532,0,0,0-10.73845-31.165c-.14722-.2943-.29382-.59642-.45669-.89122a90.4835,90.4835,0,0,0-7.72751-12.58252,79.99234,79.99234,0,0,0-5.12865-6.26144,66.51857,66.51857,0,0,0-16.2368-12.99672c-12.082-6.88393-26.2312-9.82718-39.49344-6.28522C714.87242,745.79041,714.54046,745.88144,714.201,745.98012Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#f0f0f0"
			/>
			<path
				d="M714.26407,746.41752a82.81442,82.81442,0,0,1,43.67948,26.23454,35.66256,35.66256,0,0,1,6.1017,9.36074A20.45408,20.45408,0,0,1,765.3529,792.698c-.42275,3.38013-1.2466,6.78868-.84033,10.21271a12.52414,12.52414,0,0,0,5.39032,8.70941c3.57744,2.56121,7.86182,3.68426,12.08975,4.63689,4.69431,1.05773,9.587,2.082,13.43439,5.159.46616.37282,1.0174-.37231.55194-.74457-6.69381-5.35349-15.91957-4.57153-23.30632-8.43634-3.4468-1.80339-6.371-4.65645-7.11247-8.60207-.64838-3.45028.19819-6.96593.65581-10.38468a21.82624,21.82624,0,0,0-.88932-10.4955,32.96934,32.96934,0,0,0-5.71931-9.5608A80.34453,80.34453,0,0,0,740.74442,756.616,84.28281,84.28281,0,0,0,714.36486,745.496c-.57956-.1344-.67656.788-.10079.92149Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M754.50823,768.21131a12.42481,12.42481,0,0,0,.23186-16.08716c-.38108-.45868-1.11175.112-.73016.57125a11.5051,11.5051,0,0,1-.24627,14.964c-.39477.447.35205.99642.74457.55194Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M765.793,791.01241a23.94782,23.94782,0,0,1-16.687-5.112c-.46747-.37116-1.01885.37385-.55194.74457a24.90928,24.90928,0,0,0,17.37514,5.28424c.59572-.04691.45628-.96343-.1362-.91677Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M732.45269,752.64521a7.033,7.033,0,0,1-5.6426,3.5633c-.596.03934-.45593.95586.13621.91678a7.88113,7.88113,0,0,0,6.251-3.92813.479.479,0,0,0-.09632-.64826.46576.46576,0,0,0-.64825.09631Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#fff"
			/>
			<path
				d="M1046.84009,823.575a1.19287,1.19287,0,0,1-1.18994,1.19H154.35034a1.19,1.19,0,1,1,0-2.38h891.29981A1.19284,1.19284,0,0,1,1046.84009,823.575Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<circle cx="574.11172" cy="283.5001" r="4.5" fill="#3f3d56" />
			<path
				d="M670.92274,393.39713l60.66693-38.11439a4.796,4.796,0,1,1,4.7247,8.33631l-63.86869,32.46512a1.54589,1.54589,0,0,1-1.52294-2.687Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#e4e4e4"
			/>
			<path
				d="M549.21246,475.4666a4.2019,4.2019,0,0,1,.06917-4.7904,9.89062,9.89062,0,0,1,3.96609-3.145,33.10093,33.10093,0,0,1,10.3488-3.27037c2.74024-.389,5.73142-.51308,7.857-2.28572,2.11163-1.761,3.289-5.05381,6.02487-5.32862,2.64516-.26571,4.67864,2.62949,7.331,2.80923,3.26926.22155,5.40986-3.60486,8.59126-4.38961,2.12951-.52529,4.31916.40172,6.31656,1.30789l11.98707,5.43821,6.14422,2.78748c2.14618.97366,4.56646,2.28482,4.9716,4.60644.55667,3.18991-2.99056,5.44068-6.0242,6.57313a96.9698,96.9698,0,0,1-67.12484.00842"
				transform="translate(-153.15991 -75.23499)"
				fill="#00b5d8"
			/>
			<ellipse cx="414.11161" cy="436.5" rx="157.5" ry="22.5" fill="#3f3d56" />
			<rect
				x="616.61161"
				y="576"
				width="126"
				height="18"
				rx="8.99999"
				fill="#3f3d56"
			/>
			<path
				d="M939.11137,490.775l-35.66993,169.45,9.29,43.37,17.54,81.85v36.79a.77571.77571,0,0,1-.00976.15,6.93531,6.93531,0,0,1-.44043,2.38H915.72172a6.93483,6.93483,0,0,1-.44043-2.38.77493.77493,0,0,1-.00977-.15v-35.21l-15.91992-74.29-3.22021-15-6.23-29.07-1.79981-8.42v-.01l1.77979-8.44,1.37011-6.51,33.18018-157.59a7.49966,7.49966,0,1,1,14.67969,3.07995Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<path
				d="M786.27152,660.235v162a.77571.77571,0,0,1-.00976.15,6.93531,6.93531,0,0,1-.44043,2.38H771.72172a6.93483,6.93483,0,0,1-.44043-2.38.77493.77493,0,0,1-.00977-.15v-162a7.5,7.5,0,0,1,15,0Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<path
				d="M643.61158,558h72.00005a27,27,0,0,1,27,27v0a0,0,0,0,1,0,0h-126a0,0,0,0,1,0,0v0A27,27,0,0,1,643.61158,558Z"
				fill="#3f3d56"
			/>
			<path
				d="M904.77152,712.735h-126a7.5,7.5,0,0,1,0-15h126a7.5,7.5,0,0,1,0,15Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<rect
				x="309.6806"
				y="648.78044"
				width="145.09091"
				height="20.72727"
				rx="8.99999"
				transform="translate(611.29221 1243.05316) rotate(-180)"
				fill="#3f3d56"
			/>
			<path
				d="M317.37162,659.265l-2.30029,9.48-8.43994,34.72-3.63965,15-16.90039,69.58v30.19a7.39225,7.39225,0,0,1-1.25977,4.15,7.24146,7.24146,0,0,1-2.56982,2.38h-7.34034a7.24155,7.24155,0,0,1-2.56982-2.38,7.39271,7.39271,0,0,1-1.26025-4.15v-31.99l18.78027-77.3L301.99174,659.025l-41.1001-195.25a7.49488,7.49488,0,1,1,14.66992-3.07995l37.99024,180.43,1.75,8.32,2.03955,9.69995Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<path
				d="M451.91166,659.145v159.09a7.3889,7.3889,0,0,1-1.26025,4.15,7.24158,7.24158,0,0,1-2.56983,2.38h-7.3501a7.29875,7.29875,0,0,1-2.56006-2.38,7.39232,7.39232,0,0,1-1.25976-4.15V659.145a7.5,7.5,0,1,1,15,0Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<path
				d="M309.6806,628.05317H454.77152a0,0,0,0,1,0,0v4.09094a27,27,0,0,1-27,27h-91.091a27,27,0,0,1-27-27v-4.09094A0,0,0,0,1,309.6806,628.05317Z"
				transform="translate(611.29221 1211.96225) rotate(-180)"
				fill="#3f3d56"
			/>
			<path
				d="M444.408,718.462H299.31693a7.5,7.5,0,0,1,0-15H444.408a7.5,7.5,0,0,1,0,15Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<polygon
				points="477.713 708.651 461.95 701.112 483.603 635.223 506.869 646.349 477.713 708.651"
				fill="#9e616a"
			/>
			<polygon
				points="584.542 702.683 567.592 706.865 543.033 642.018 568.051 635.845 584.542 702.683"
				fill="#9e616a"
			/>
			<path
				d="M672.735,497.50209a16.433,16.433,0,0,0,22.26167,5.58495,15.74179,15.74179,0,0,0,2.11245-1.53084l49.8364,28.59974L744.781,500.79756l-46.99365-22.65784a16.372,16.372,0,0,0-19.85968-2.58668A15.75545,15.75545,0,0,0,672.735,497.50209Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#9e616a"
			/>
			<path
				d="M725.51945,519.38657l8.80951,5.36868,39.5639,24.126a23.32784,23.32784,0,0,0,32.16238-7.42342,22.825,22.825,0,0,0,2.90931-16.11318L791.38,437.49233a24.37655,24.37655,0,0,0-32-18.49875,23.20943,23.20943,0,0,0-14.644,28.19538l18.38734,62.34711-28.185-13.14051Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#e6e6e6"
			/>
			<path
				d="M704.69067,759.74524l-27.12378-54.39893.00342-.12451,2.678-99.77637c.03345-.8872.10523-1.7788.21338-2.65576A30.35216,30.35216,0,0,1,692.01,582.36389a29.16492,29.16492,0,0,1,21.75366-5.94922l77.56006,10.03711,2.6897-10.99853.501-.18262,74.31446-27.23535.42822.69726c9.73267,15.83643,16.53662,47.46973,18.39014,56.7876l.02661.13428c.03906.19629.0625.31543.07055.3501,3.82569,15.90088-11.98193,42.24121-27.72924,46.20019-33.17041,8.45459-62.8357,1.85987-97.18555-5.77783-12.31738-2.73975-25.04712-5.5708-39.06909-8.01855l.41675,8.25244a61.84049,61.84049,0,0,0,3.91235,18.5625c2.5,7.32226,4.47485,13.106.29883,25.165l-2.01978,5.83349a19.88415,19.88415,0,0,1-2.04468,17.62891l-.406.6206L741.80518,759.735Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<path
				d="M660.12524,735.68811l-32.345-3.00635,11.459-36.647a239.26533,239.26533,0,0,1,17.67431-69.51709l15.63038-37.042c.03613-.82422.10546-1.65381.20629-2.4668a30.347,30.347,0,0,1,11.5481-20.42529,29.18137,29.18137,0,0,1,21.75317-5.94873l77.44556,10.02246,3.37305-28.311,74.33447-9.94726.34033.55371c12.99292,21.14014,21.2417,37.68994,25.95923,52.08349.23682.73389.44727,1.48292.62671,2.229,3.85181,16.0083-5.76343,32.23828-21.43384,36.17871-39.93481,10.18164-87.95727,9.89893-151.09619-.894L685.0437,695.26965a111.67644,111.67644,0,0,1-10.793,19.7959Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<ellipse
				cx="619.7895"
				cy="255.0368"
				rx="37.4674"
				ry="38.30238"
				fill="#9e616a"
			/>
			<path
				d="M783.76786,571.99426l-5.376-19.25927-1.32181-9.5-7.727.25781-15.1648-35.00342-5.89014-9.23q-1.80176-1.897-3.26464-3.64844a82.2256,82.2256,0,0,1-14.55518-23.4375,61.5809,61.5809,0,0,1-4.26074-19.30078c-1.09912-19.55762,7.14526-40.24951,25.20556-63.25439a10.854,10.854,0,0,1-.58813-2.52246,10.67121,10.67121,0,0,1,9.27832-11.814l17.41919-1.95605a10.28132,10.28132,0,0,1,7.62329,2.22265,10.68765,10.68765,0,0,1,3.948,7.25537,10.9284,10.9284,0,0,1-1.23194,6.31934,46.51989,46.51989,0,0,1,38.60987,32.48877A308.94655,308.94655,0,0,1,851.25248,482.818c1.19263,4.15821.66162,8.44239.148,12.58545-.47437,3.82715-.96484,7.78467-.13989,11.729.83886,4.01172,2.85717,8.03613,4.99414,12.29687,2.44751,4.87988,4.97827,9.92578,5.66235,15.06934l.0481.36133Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#e4e4e4"
			/>
			<path
				d="M730.93114,471.984a81.957,81.957,0,0,0,14.47573,23.30551c1.04493,1.24772,2.14838,2.47334,3.3032,3.70118l5.927,9.29971c21.84824-16.37654,39.55-80.85776,39.55-80.85776l-24.6511-4.79533Z"
				transform="translate(-153.15991 -75.23499)"
				opacity="0.2"
				style={{ isolation: "isolate" }}
			/>
			<path
				d="M716.007,372.15244a16.47078,16.47078,0,0,1-5.56191,22.28968,15.80431,15.80431,0,0,1-2.34527,1.15035l1.745,57.43486-24.87223-15.6571,2.15608-52.14071a16.42509,16.42509,0,0,1,7.07459-18.76314A15.71878,15.71878,0,0,1,716.007,372.15244Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#9e616a"
			/>
			<path
				d="M712.03089,431.34727l-27.352,3.88946,1.17607,56.64156a23.69944,23.69944,0,0,0,11.58612,19.97234h0a22.70767,22.70767,0,0,0,27.12461-3.07962l64.57517-62.11225a24.48393,24.48393,0,0,0,1.80419-33.6205h0a23.22022,23.22022,0,0,0-33.26753-2.27793,23.82216,23.82216,0,0,0-1.81824,1.811l-42.6395,49.05243Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#e6e6e6"
			/>
			<polygon
				points="330.104 725.568 349.518 725.567 358.754 650.683 330.101 650.684 330.104 725.568"
				fill="#ffb6b6"
			/>
			<circle cx="220.06094" cy="255.70256" r="38.74843" fill="#ffb6b6" />
			<path
				d="M509.014,777.735H481.522l-7.009-9.395-1.897-8.85157-1.633-1.58007a13.62814,13.62814,0,0,1-2.29785-16.76026l-19.92481-92.96142c-5.21826-.459-64.06933-5.72071-104.97839-12.96094-10.46961-1.85254-18.64368-6.9419-24.29553-15.126-13.8877-20.11084-7.9386-52.65088-7.877-52.97705l.06861-.36279.36694-.04151,95.55469-10.72509.12866.061c3.1709,1.502,77.80127,36.93164,89.99707,49.12744,5.50732,5.50733,17.79395,38.22754,20.54468,73.01367.49267,6.23145-1.28052,12.57813-2.99536,18.71582-1.6045,5.74268-3.26343,11.68067-2.93579,17.29444.50585,8.66162.9851,17.74756,1.425,27.00537.07007,1.4751,1.18164,3.002,2.25635,4.478,1.1228,1.54248,2.18335,2.999,2.25073,4.52392.65332,14.78369-9.00927,27.208-9.10693,27.33155Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<path
				d="M515.27414,434.14376a14.7609,14.7609,0,0,0-18.59331,12.907l-32.19537,10.06254,1.34311,21.05646L511.09508,463.321a14.84092,14.84092,0,0,0,4.17906-29.17721Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#ffb6b6"
			/>
			<path
				d="M494.26784,468.98811l-24.06228,9.10717-.61523,1.19358a12.1398,12.1398,0,0,1-16.35271,5.22852l0,0-54.08442,20.47007s-24.15305-24.17025-41.34909-45.74079l5.8607-36.048a69.05689,69.05689,0,0,1,8.511-23.72592c35.26609,7.73316,55.51,57.03221,55.51,57.03221l63.55833-12.12729Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#00b5d8"
			/>
			<path
				d="M367.71457,367.61482c-9.70064,2.61994-20.39528-.8633-27.96568-7.47053s-12.306-15.96964-15.0346-25.64027c-1.99838-7.08256-2.94593-14.94453.20763-21.59369s11.64084-11.13518,18.18877-7.77649c-4.03938-4.70621-2.02136-12.49,2.69631-16.516s11.1958-5.18025,17.36563-5.81122c8.95416-.9157,18.20329-1.01819,26.72387,1.88268s16.26232,9.243,18.929,17.83979a13.57771,13.57771,0,0,0,16.19474-3.65644,12.30114,12.30114,0,0,1-6.77771,13.338l13.05515-4.23261c2.24521,4.75241-1.68893,10.63424-6.71986,12.15611s-10.4616-.1416-15.2357-2.34029-9.40062-4.97846-14.58628-5.836-11.27694.80875-13.67558,5.48558c-1.25633,2.44957-1.32185,5.31842-2.05127,7.973s-2.57715,5.40676-5.32152,5.624c-1.73388.13726-3.43146-.78632-5.16048-.59747-2.14355.23412-3.78423,2.17584-4.35509,4.2552a16.3259,16.3259,0,0,0-.01548,6.42345l3.3162,25.34806"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<path
				d="M319.70914,624.7301a.09365.09365,0,0,1-.02185-.00244l-.30639-.05224-.08863-.29786c-1.114-3.74707-2.53161-7.58252-3.90258-11.292a136.15989,136.15989,0,0,1-5.105-15.73633,120.52464,120.52464,0,0,1-2.25623-15.49072c-.38245-3.78027-.77795-7.68945-1.45044-11.5376-.29858-1.70849.833-3.32666,1.92737-4.8916,1.01465-1.45068,1.97314-2.82129,1.772-4.11767-.20569-1.32569-1.6759-2.78174-3.09765-4.18995-1.55848-1.54345-3.17005-3.13964-3.3982-4.81933a480.11343,480.11343,0,0,1-4.32593-69.16358c.32105-32.00048,1.76722-53.8125,4.29822-64.831,6.80579-29.627,38.2489-35.03369,43.17053-35.70117A10.86785,10.86785,0,0,1,361.6226,376.545l22.34082,10.22705a36.37112,36.37112,0,0,1,19.33789,21.59717l3.31885,10.11768,1.66235,67.91943L399.07007,534.235l18,27C321.13647,613.90491,320.0181,624.7301,319.70914,624.7301Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#00b5d8"
			/>
			<path
				d="M472.8168,793.2573l6.3122-.00025L503.77279,783.235l13.20832,10.02052h.00179A28.14649,28.14649,0,0,1,545.12786,821.4v.9146l-72.30972.00268Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<path
				d="M523.33541,482.61151a14.7609,14.7609,0,0,0-21.31677,7.60906L468.313,491.5349,463.77152,507.235l47.91729,2.45291a14.84092,14.84092,0,0,0,11.6466-27.07639Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#ffb6b6"
			/>
			<path
				d="M495.6489,511.381l-34.62256-.43159-4.38261-.05933-70.44105-.88753s-19.1288-18.24916-35.78527-37.038l2.33461-16.88619a68.99105,68.99105,0,0,1,23.13233-42.71581c23.856,15.94043,37.69063,47.49273,37.69063,47.49273L436.77152,471.235h0a101.559,101.559,0,0,1,46.37166,13.58062l7.62831,4.41938Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#00b5d8"
			/>
			<path
				d="M750.07007,809.85908l-11.52,2.843-4.7404-10.36878-2.58228,12.17593-30.55377,7.5403a7.07427,7.07427,0,0,1-6.99256-11.557l20.2407-22.87253-2.71356-10.9955,26.04187-4.80175Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<path
				d="M628.02848,813.41415,617.04278,808.93l2.27264-11.1722-9.25569,8.32188L580.923,794.18677a7.07427,7.07427,0,0,1,1.15167-13.45856l29.82691-6.57216,4.28-10.48554,23.87732,11.4503Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
			<path
				d="M589.77148,507.735h-9a36.54143,36.54143,0,0,1-36.5-36.5v-.5h82v.5A36.54143,36.54143,0,0,1,589.77148,507.735Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#e4e4e4"
			/>
			<path
				d="M580.77152,457.735c0,2.48528-4.5,4.5-4.5,4.5s-4.5-2.01472-4.5-4.5,4.5-4.5,4.5-4.5S580.77152,455.2497,580.77152,457.735Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<path
				d="M607.77152,457.735c0,2.48528-4.5,4.5-4.5,4.5s-4.5-2.01472-4.5-4.5,4.5-4.5,4.5-4.5S607.77152,455.2497,607.77152,457.735Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<path
				d="M589.77152,466.735c0,2.48528-4.5,4.5-4.5,4.5s-4.5-2.01472-4.5-4.5,4.5-4.5,4.5-4.5S589.77152,464.2497,589.77152,466.735Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#3f3d56"
			/>
			<circle cx="405.11161" cy="368.5" r="4.5" fill="#3f3d56" />
			<path
				d="M492.82588,434.06428l70.97258,9.80189a4.796,4.796,0,1,1-1.73958,9.42288l-69.7937-16.18747a1.54589,1.54589,0,0,1,.5607-3.0373Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#e4e4e4"
			/>
			<path
				d="M579.07007,210.44788V75.235h-9V210.44788a49.49773,49.49773,0,0,0-45,49.287V273.235h31.5a18,18,0,0,0,36,0h31.5V259.73492A49.49773,49.49773,0,0,0,579.07007,210.44788Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#f0f0f0"
			/>
			<path
				d="M694.94507,176.64465V75.235h-6.75V176.64465a37.12331,37.12331,0,0,0-33.75,36.96529V223.735h23.625a13.5,13.5,0,1,0,27,0h23.625V213.60994A37.12332,37.12332,0,0,0,694.94507,176.64465Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#f0f0f0"
			/>
			<path
				d="M466.94507,176.64465V75.235h-6.75V176.64465a37.12331,37.12331,0,0,0-33.75,36.96529V223.735h23.625a13.5,13.5,0,1,0,27,0h23.625V213.60994A37.12332,37.12332,0,0,0,466.94507,176.64465Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#f0f0f0"
			/>
			<path
				d="M873.20825,313.66022c-6.36865-7.42688-9.39648-17.28052-14.48779-25.71411-5.09131-8.43366-13.95117-15.98182-23.311-14.01923-6.45214,1.353-11.43847,7.04645-13.96289,13.394-2.52392,6.34754-2.99707,13.3476-3.43945,20.20526.15625-14.09277-9.12842-27.75482-21.91846-32.25164-12.78906-4.49683-28.09521.51916-36.13183,11.84106a19.52937,19.52937,0,0,0-25.93848-.54449c-7.18848,6.4248-8.7793,18.65332-3.49268,26.84832s16.73584,11.24787,25.13721,6.70282l2.97022,2.73224c-1.67188,5.84748,1.57031,12.75476,7.0205,14.95593,4.41944,1.78516,10.6587,1.488,12.3125,6.12592,1.15577,3.24066-1.00439,6.69971-3.30224,9.18994-2.29736,2.49018-5.02539,5.06171-5.30127,8.50769-.417,5.1994,4.956,8.84168,9.84033,9.9386,11.77734,2.64514,24.84522-2.80872,31.6333-13.20233q.19629-.30066.42676-.60205a45.47993,45.47993,0,0,0,9.148-34.77527c-.38184-2.40222.00293-4.189,1.65918-4.75793,7.15869-2.459,27.21533,2.702,33.28515,7.36633,6.07032,4.66437,10.93116,10.83722,16.77784,15.80261,5.84716,4.96545,13.29785,8.79559,20.72168,7.44342,5.9458-1.08295,11.0039-5.39954,14.40625-10.6062,3.40185-5.20667,5.35986-11.27576,7.11377-17.30725C901.22681,328.52911,883.23267,325.34973,873.20825,313.66022Z"
				transform="translate(-153.15991 -75.23499)"
				fill="#2f2e41"
			/>
		</Icon>
	);
};

export default LandingPage;
